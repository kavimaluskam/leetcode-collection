import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Helmet from "react-helmet"

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

const Difficulties = ({ pageContext, data }) => {
  const { difficulty } = pageContext
  return (
    <>
      <Helmet title={`${difficulty} | ${data.site.siteMetadata.title}`} />
      <Headline>
        <h2>
          <Link to="/tags">All tags</Link> /&nbsp;
        </h2>
        <h1>{difficulty}</h1>
      </Headline>
      <Listing listing={data.listing} />
      <Pagination prefix={`/difficulty/${difficulty}/`} {...pageContext} />
    </>
  )
}

export default Difficulties
export const pageQuery = graphql`
  query($difficulty: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    listing: allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: ASC }
      filter: { frontmatter: { difficulty: { eq: $difficulty } } }
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
