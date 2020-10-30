import "../styles/index.css"

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import Header from "../components/Header"

import favicon16 from "../../static/favicon-16x16.png"
import favicon32 from "../../static/favicon-32x32.png"
import faviconApple from "../../static/apple-touch-icon.png"

const ContentWrapper = styled.div`
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
  padding-top: 80px;
  color: var(--color-text);
  background: var(--color-background);
`

const TemplateWrapper = ({ children }) => {
  const {
    site: {
      siteMetadata: { url, title, description, author, keywords, language },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
          title
          description
          author
          keywords
          language
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
        <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
        {/* <link rel="mask-icon" href={safariPinned} color="#f3c51d" /> */}
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/img/og-image.webp" />
      </Helmet>
      <Header title={title} author={author} />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
    </>
  )
}

export default TemplateWrapper
