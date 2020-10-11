import React from "react"
import { graphql, Link } from "gatsby"

const Home = ({ data }) => {
  const list = data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => frontmatter
  )

  return (
    <>
      <h1>Leetcode Collection</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <Link to={`/question/${item.id}`}>
              {item.id}: {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___id] }
      limit: 10000
    ) {
      edges {
        node {
          frontmatter {
            id
            title
          }
        }
      }
    }
  }
`
