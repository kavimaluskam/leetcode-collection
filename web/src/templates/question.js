import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.url}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default Template

export const pageQuery = graphql`
  query($id: Int!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        title
        url
        id
      }
    }
  }
`