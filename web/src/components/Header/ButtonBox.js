import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ThemeContext } from "../../contexts/ThemeContext"

import GithubIcon from "./assets/github.svg"
import MoonIcon from "./assets/moon.svg"
import SunIcon from "./assets/sun.svg"
import TagIcon from "./assets/tag.svg"

const Container = styled.div`
  transition: opacity 0.7s;
  opacity: ${props => (props.colorMode ? 1 : 0)};
  display: inline-flex;
  margin-left: auto;
  height: 1.5rem;
  svg {
    fill: var(--color-lightGrey);
    &:hover {
      fill: var(--color-primary);
    }
  }
`

const ThemeButtonWrapper = styled.a`
  float: right;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => (props.alt === "light" ? `rotate(180deg)` : "")};
`

const ButtonBox = ({ sourceUrl }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  const toggleColorMode = event => {
    event.preventDefault()
    colorMode === "light" ? setColorMode("dark") : setColorMode("light")
  }

  return (
    <Container colorMode={colorMode}>
      <a target="_blank" rel="noopener noreferrer" href={sourceUrl}>
        <GithubIcon />
      </a>
      &nbsp; &nbsp;
      <Link to="/tags">
        <TagIcon />
      </Link>
      &nbsp; &nbsp;
      <ThemeButtonWrapper href="#" alt={colorMode} onClick={toggleColorMode}>
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </ThemeButtonWrapper>
    </Container>
  )
}

export default ButtonBox
