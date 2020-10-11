import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Listing from "../components/QuestionListing"
import Pagination from "../components/Pagination"

const Wrapper = styled.div`
  > * {
    grid-column: 2;
  }
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;

  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, helvetica neue, sans-serif;
  -webkit-font-smoothing: antialiased;
`

const Markdown = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #f09a1a;
  }
`

const Home = ({ pageContext, data }) => {
  const { html } = data.homepage.edges[0].node
  return (
    <Wrapper>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      <Listing listing={data.listing} />
      <Pagination prefix="/" {...pageContext} />
    </Wrapper>
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
