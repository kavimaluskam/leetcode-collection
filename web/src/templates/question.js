import "../styles/prism-vsc-dark-plus.css"

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Helmet from "react-helmet"

import Metadata from "../components/QuestionMetadata"

const Markdown = styled.div`
  line-height: 1.5rem;
  a {
    color: var(--color-text);
    text-decoration: none;
    border-bottom: 0.3px solid var(--color-primary);
  }
  a:hover {
    color: var(--color-primary);
  }
`

const Template = ({ data }) => {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark
  const { id, title, url, tags, difficulty, acceptance } = frontmatter

  return (
    <>
      <Helmet title={`${title} | ${site.siteMetadata.title}`} />
      <h1>
        {id}. {title}
      </h1>
      <Metadata
        url={url}
        tags={tags}
        difficulty={difficulty}
        acceptance={acceptance}
      />
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default Template

export const pageQuery = graphql`
  query($id: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        id
        title
        url
        tags
        difficulty
        acceptance
      }
    }
  }
`
