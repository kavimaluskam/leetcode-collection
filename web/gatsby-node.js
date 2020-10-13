const QUESTION_PER_PAGE = 10

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const homeTemplate = require.resolve(`./src/templates/home.js`)
  const questionTemplate = require.resolve(`./src/templates/question.js`)
  const tagTemplate = require.resolve(`./src/templates/tag.js`)
  const difficultyTemplate = require.resolve(`./src/templates/difficulty.js`)

  const result = await graphql(`
    {
      questions: allMarkdownRemark(
        filter: { frontmatter: { id: { gt: 0 } } }
        sort: { order: ASC, fields: [frontmatter___id] }
        limit: 3000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              id
            }
          }
        }
      }
      tags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      difficulties: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___difficulty) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // create home page
  const questions = result.data.questions.edges
  const questionNumPages = Math.ceil(questions.length / QUESTION_PER_PAGE)

  Array.from({ length: questionNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: homeTemplate,
      context: {
        limit: QUESTION_PER_PAGE,
        skip: i * QUESTION_PER_PAGE,
        numPages: questionNumPages,
        currentPage: i + 1,
      },
    })
  })

  // create question detail pages
  questions.forEach(({ node }) => {
    const path = node.fileAbsolutePath.split("/").pop()
    createPage({
      path: `/question/${path}`,
      component: questionTemplate,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
      },
    })
  })

  // create tag pages
  const tags = result.data.tags.group
  tags.forEach(item => {
    const numPages = Math.ceil(item.totalCount / QUESTION_PER_PAGE)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tag/${item.fieldValue}/`
            : `/tag/${item.fieldValue}/${i + 1}`,
        component: tagTemplate,
        context: {
          tag: item.fieldValue,
          limit: QUESTION_PER_PAGE,
          skip: i * QUESTION_PER_PAGE,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // create difficulty pages
  const difficulties = result.data.difficulties.group
  difficulties.forEach(item => {
    const numPages = Math.ceil(item.totalCount / QUESTION_PER_PAGE)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/difficulty/${item.fieldValue}/`
            : `/difficulty/${item.fieldValue}/${i + 1}`,
        component: difficultyTemplate,
        context: {
          difficulty: item.fieldValue,
          limit: QUESTION_PER_PAGE,
          skip: i * QUESTION_PER_PAGE,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
