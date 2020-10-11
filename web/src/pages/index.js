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

const Home = ({ data }) => {
  const { html } = data.homepage.edges[0].node
  const list = data.listing.edges.map(
    ({
      node: {
        frontmatter: { ...data },
      },
    }) => data
  )

  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Listing list={list} />
    </Wrapper>
  )
}

export default Home

export const pageQuery = graphql`
  {
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
      limit: 3000
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
