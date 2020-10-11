import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Listing from "../components/QuestionListing"

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, helvetica neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5rem;
  > * {
    grid-column: 2;
  }
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
`

const Home = ({ pageContext, data }) => {
  const { html } = data.homepage.edges[0].node
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Listing listing={data.listing} />
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
