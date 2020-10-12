import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import GithubIcon from "./assets/github.svg"
import MoonIcon from "./assets/moon.svg"
import SunIcon from "./assets/sun.svg"

const Container = styled.div`
  display: inline-flex;
  margin-left: auto;
  svg {
    margin-left: 0.5em;
    margin-right: 0.5em;
    fill: ${props => props.theme.color.lightGrey};
    &:hover {
      fill: ${props => props.theme.color.primary};
    }
  }
`

const ButtonBox = ({ sourceUrl }) => {
  return (
    <Container>
      <Link to={sourceUrl}>
        <GithubIcon />
      </Link>
      {/* <Link>
          <MoonIcon />
        </Link> */}
      <Link>
        <SunIcon />
      </Link>
    </Container>
  )
}

export default ButtonBox
