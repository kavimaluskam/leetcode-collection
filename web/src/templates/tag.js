import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Listing from "../components/QuestionListing"
import Pagination from "../components/Pagination"

const Headline = styled.div`
  margin-block-start: 1.5em;
  margin-block-end: 1.5em;
  a {
    color: var(--color-text);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-primary);
  }
  h1 {
    display: inline;
  }
  h2 {
    color: var(--color-lightGrey);
    display: inline;
  }
  h2 a {
    color: var(--color-lightGrey);
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  return (
    <>
      <Headline>
        <h2>
          <Link to="/">All questions</Link> /&nbsp;
        </h2>
        <h1>{tag}</h1>
      </Headline>
      <Listing listing={data.listing} />
      <Pagination prefix={`/tag/${tag}/`} {...pageContext} />
    </>
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
          fileAbsolutePath
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
