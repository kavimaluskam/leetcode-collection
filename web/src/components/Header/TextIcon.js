import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ThemeContext } from "../../contexts/ThemeContext"

const Container = styled.div`
  transition: opacity 0.7s;
  opacity: ${props => (props.colorMode ? 1 : 0)};
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
  const { colorMode } = React.useContext(ThemeContext)

  const [titlePrefix, titlePostfix] = title.split(" ")

  return (
    <Container colorMode={colorMode}>
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
