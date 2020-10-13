import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  width: 250px;
`
const AppName = styled.h2`
  display: inline-block;
  margin: 0;
  margin-bottom: -1rem;
  font-family: TypoRound, sans-serif;
`
const AppNamePrefix = styled.span`
  color: var(--color-primary);
`

const AppNamePostfix = styled.span`
  color: var(--color-text);
`

const AuthorName = styled.span`
  font-size: 0.7rem;
  color: var(--color-lightGrey);
  display: inline-block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, helvetica neue, sans-serif;
`

const TextIcon = ({ title, author }) => {
  const [titlePrefix, titlePostfix] = title.split(" ")
  return (
    <Container>
      <Link to="/">
        <AppName>
          <AppNamePrefix>{titlePrefix}</AppNamePrefix>
          <AppNamePostfix>{titlePostfix}</AppNamePostfix>
        </AppName>
        <AuthorName>{author}</AuthorName>
      </Link>
    </Container>
  )
}

export default TextIcon
