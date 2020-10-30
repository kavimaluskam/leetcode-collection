import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ThemeContext } from "../../contexts/ThemeContext"

import MoonIcon from "./assets/moon.svg"
import SunIcon from "./assets/sun.svg"
import TagIcon from "./assets/tag.svg"

const Container = styled.div`
  transition: opacity 0.7s;
  opacity: ${props => (props.colorMode ? 1 : 0)};
  display: inline-flex;
  margin-left: auto;
  height: 100%;
  a {
    padding: 12px;
  }
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
  height: 1em;
  transform: ${props => (props.alt === "light" ? `rotate(180deg)` : "")};
`

const ButtonBox = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  const toggleColorMode = event => {
    event.preventDefault()
    colorMode === "light" ? setColorMode("dark") : setColorMode("light")
  }

  return (
    <Container colorMode={colorMode}>
      <ThemeButtonWrapper href="#" alt={colorMode} onClick={toggleColorMode}>
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </ThemeButtonWrapper>
      <Link to="/tags">
        <TagIcon />
      </Link>
    </Container>
  )
}

export default ButtonBox
