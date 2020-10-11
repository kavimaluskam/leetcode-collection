exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const homeTemplate = require.resolve(`./src/templates/home.js`)
  const questionTemplate = require.resolve(`./src/templates/question.js`)
  const tagTemplate = require.resolve(`./src/templates/tag.js`)

  const result = await graphql(`
    {
      questions: allMarkdownRemark(
        filter: { frontmatter: { id: { gt: 0 } } }
        sort: { order: ASC, fields: [frontmatter___id] }
        limit: 3000
      ) {
        edges {
          node {
            frontmatter {
              id
            }
          }
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
  const questionPerPage = 10
  const numPages = Math.ceil(questions.length / questionPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: homeTemplate,
      context: {
        limit: questionPerPage,
        skip: i * questionPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // create question detail pages
  questions.forEach(({ node }) => {
    createPage({
      path: `/question/${node.frontmatter.id}`,
      component: questionTemplate,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
      },
    })
  })
}
