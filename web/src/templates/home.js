import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Listing from "../components/QuestionListing"
import Pagination from "../components/Pagination"

const Markdown = styled.div`
  a {
    color: var(--color-text);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-primary);
  }
`

const Home = ({ pageContext, data }) => {
  const { html } = data.homepage.edges[0].node
  return (
    <>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      <Listing listing={data.listing} />
      <Pagination prefix="/" {...pageContext} />
    </>
  )
}

export default Home
export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    homepage: allMarkdownRemark(filter: { frontmatter: { id: { eq: null } } }) {
      edges {
        node {
          html
        }
      }
    }
    listing: allMarkdownRemark(
      filter: { frontmatter: { id: { gt: 0 } } }
      sort: { order: ASC, fields: [frontmatter___id] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            difficulty
            tags
          }
        }
      }
    }
  }
`
