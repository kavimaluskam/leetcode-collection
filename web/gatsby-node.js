exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const template = require.resolve(`./src/templates/question.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___id] }
        limit: 1000
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
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/question/${node.frontmatter.id}`,
      component: template,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
      },
    })
  })
}