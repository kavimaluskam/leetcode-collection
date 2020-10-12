import "../styles/prism-vsc-dark-plus.css"

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Metadata from "../components/QuestionMetadata"

const Markdown = styled.div`
  line-height: 1.5rem;
`

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { id, title, url, tags, difficulty, acceptance } = frontmatter

  return (
    <>
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
