import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Listing from "../components/QuestionListing"
import Pagination from "../components/Pagination"

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, helvetica neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  > * {
    grid-column: 2;
  }
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
`

const Headline = styled.div`
  margin-block-start: 1.5em;
  margin-block-end: 1.5em;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #f09a1a;
  }
  h1 {
    display: inline;
  }
  h2 {
    color: #78757a;
    display: inline;
  }
  h2 a {
    color: #78757a;
  }
`

const Difficulties = ({ pageContext, data }) => {
  const { difficulty } = pageContext
  return (
    <Wrapper>
      <Headline>
        <h2>
          <Link to="/">All questions</Link> /&nbsp;
        </h2>
        <h1>{difficulty}</h1>
      </Headline>
      <Listing listing={data.listing} />
      <Pagination prefix={`/difficulty/${difficulty}/`} {...pageContext} />
    </Wrapper>
  )
}

export default Difficulties
export const pageQuery = graphql`
  query($difficulty: String, $skip: Int!, $limit: Int!) {
    listing: allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: ASC }
      filter: { frontmatter: { difficulty: { eq: $difficulty } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
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
