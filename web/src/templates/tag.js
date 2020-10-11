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
  color: ${props => props.theme.color.text};
  background: ${props => props.theme.color.background};
`

const Headline = styled.div`
  margin-block-start: 1.5em;
  margin-block-end: 1.5em;
  a {
    color: ${props => props.theme.color.text};
    text-decoration: none;
  }
  a:hover {
    color: ${props => props.theme.color.primary};
  }
  h1 {
    display: inline;
  }
  h2 {
    color: ${props => props.theme.color.lightGrey};
    display: inline;
  }
  h2 a {
    color: ${props => props.theme.color.lightGrey};
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  return (
    <Wrapper>
      <Headline>
        <h2>
          <Link to="/">All questions</Link> /&nbsp;
        </h2>
        <h1>{tag}</h1>
      </Headline>
      <Listing listing={data.listing} />
      <Pagination prefix={`/tag/${tag}/`} {...pageContext} />
    </Wrapper>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String, $skip: Int!, $limit: Int!) {
    listing: allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
