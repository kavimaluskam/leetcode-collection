import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme"

import favicon16 from "../../static/favicon-16x16.png"
import favicon32 from "../../static/favicon-32x32.png"
import faviconApple from "../../static/apple-touch-icon.png"

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
    <ThemeProvider theme={theme}>
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
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

export default TemplateWrapper
