import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Helmet from "react-helmet"

const Container = styled.div`
  h1 {
    a {
      color: var(--color-text);
      text-decoration: none;
    }
    a:hover {
      color: var(--color-primary);
    }
  }

  h3 {
    display: inline-block;
    margin-right: 1rem;
    margin-top: 0;
    margin-bottom: 1rem;

    a {
      color: var(--color-text);
      text-decoration: none;
    }
    a:hover {
      color: var(--color-primary);
    }
  }
`

const TagsPage = ({
  data: {
    site,
    tags: { group: tags },
    difficulties: { group: difficulties },
  },
}) => (
  <Container>
    <Helmet title={`Tags | ${site.siteMetadata.title}`} />
    <h1>Difficulties</h1>
    {difficulties.map(({ fieldValue: v, totalCount: c }) => (
      <h3 key={v}>
        <Link to={`/difficulty/${v}/`}>
          {v}({c})
        </Link>
      </h3>
    ))}
    <h1>Tags</h1>
    {tags.map(({ fieldValue: v, totalCount: c }) => (
      <h3 key={v}>
        <Link to={`/tag/${v}/`}>
          {v}({c})
        </Link>
      </h3>
    ))}
    <h1>
      <Link to={`/`}>{`< Back to Home`}</Link>
    </h1>
  </Container>
)
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tags: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    difficulties: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___difficulty) {
        fieldValue
        totalCount
      }
    }
  }
`
