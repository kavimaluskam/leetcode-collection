import React from "react"
import styled from "styled-components"

import { Wrapper, Acceptance, Tag, Difficulty } from "../Badge"

import AcceptanceIcon from "./assets/acceptance.svg"
import LeetcodeIcon from "./assets/leetcode.svg"

const Container = styled.div`
  border-top: 1px solid var(--color-lightGrey);
  padding-top: 1rem;
  border-bottom: 1px solid var(--color-lightGrey);
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
  color: var(--color-lightGrey);
  display: flex;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1;
  text-decoration: none;
  svg {
    fill: var(--color-lightGrey);
  }

  &:hover {
    color: var(--color-primary);
    svg {
      fill: var(--color-primary);
    }
  }
`

const Metadata = ({ url, tags, difficulty, acceptance }) => (
  <Container>
    <Wrapper>
      <LeetcodeLink href={url} target="_blank" rel="noopener noreferrer">
        <LeetcodeIcon />
        View question in leetcode
      </LeetcodeLink>
    </Wrapper>
    <ResponsiveWrapper>
      <Difficulty difficulty={difficulty} />
      <Acceptance>
        <AcceptanceIcon />
        &nbsp;{acceptance}
      </Acceptance>
    </ResponsiveWrapper>
    <TagsWrapper>
      {tags.map(tag => (
        <Tag key={tag} tag={tag} />
      ))}
    </TagsWrapper>
  </Container>
)

export default Metadata
