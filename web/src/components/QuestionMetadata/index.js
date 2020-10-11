import React from "react"
import styled from "styled-components"

import { Wrapper, Acceptance, Tag, Difficulty } from "../Badge"

import AcceptanceIcon from "./acceptance.svg"
import LeetcodeIcon from "./leetcode.svg"

const Container = styled.div`
  border-top: 1px solid rgb(238, 238, 238);
  padding-top: 1rem;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding-bottom: 0.25rem;
`

const ResponsiveWrapper = styled(Wrapper)`
  width: 25%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const TagsWrapper = styled(Wrapper)`
  justify-content: flex-end;
  width: 75%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
  }
`

const LeetcodeLink = styled.a`
  color: #78757a;
  display: flex;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1;
  text-decoration: none;
`

const Metadata = ({ url, tags, difficulty, acceptance }) => (
  <Container>
    <Wrapper>
      <LeetcodeLink href={url} target="_blank" rel="noopener noreferrer">
        <img src={LeetcodeIcon} alt="lc" />
        &nbsp;View question in leetcode
      </LeetcodeLink>
    </Wrapper>
    <ResponsiveWrapper>
      <Difficulty>{difficulty}</Difficulty>
      <Acceptance>
        <img src={AcceptanceIcon} alt="accept" />
        &nbsp;{acceptance}
      </Acceptance>
    </ResponsiveWrapper>
    <TagsWrapper>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsWrapper>
  </Container>
)

export default Metadata
