import React from "react"
import styled from "styled-components"

import ShadowBox from "./assets/shadow.svg"
import ButtonBox from "./ButtonBox"
import TextIcon from "./TextIcon"

const Container = styled.div`
  position: sticky;
  z-index: 3;
  top: 0;
  background: var(--color-background);
  transition: background 350ms ease 0s;
  -webkit-font-smoothing: antialiased;
`

const Shadow = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 60px;
  z-index: 2;
  pointer-events: none;
  transform: translateY(-1px);
`

const AppBar = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
`

const ToolBar = styled.div`
  height: 60px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
`

const StyledShadowBox = styled(ShadowBox)`
  fill: var(--color-background);
`

const Header = ({ sourceUrl, title, author }) => {
  return (
    <>
      <Container>
        <AppBar>
          <ToolBar>
            <TextIcon title={title} author={author} />
            <ButtonBox sourceUrl={sourceUrl} />
          </ToolBar>
        </AppBar>
      </Container>
      <Shadow>
        <StyledShadowBox />
      </Shadow>
    </>
  )
}

export default Header
