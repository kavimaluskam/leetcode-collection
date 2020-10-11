import "../styles/prism-vsc-dark-plus.css"

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Metadata from "../components/QuestionMetadata"

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

const Markdown = styled.div`
  line-height: 1.5rem;
`

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { id, title, url, tags, difficulty, acceptance } = frontmatter

  return (
    <Wrapper>
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
    </Wrapper>
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
