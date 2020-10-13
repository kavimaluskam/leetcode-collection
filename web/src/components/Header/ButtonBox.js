import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ThemeContext } from "../../contexts/ThemeContext"

import GithubIcon from "./assets/github.svg"
import MoonIcon from "./assets/moon.svg"
import SunIcon from "./assets/sun.svg"

const Container = styled.div`
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
  transform: ${props => (props.rotate ? `rotate(180deg)` : "")};
`

const ButtonBox = ({ sourceUrl }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  const toggleColorMode = event => {
    event.preventDefault()
    colorMode === "light" ? setColorMode("dark") : setColorMode("light")
  }

  return (
    <Container>
      <Link to={sourceUrl}>
        <GithubIcon />
      </Link>
      &nbsp; &nbsp;
      <ThemeButtonWrapper
        href="#"
        rotate={colorMode === "light"}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </ThemeButtonWrapper>
    </Container>
  )
}

export default ButtonBox
