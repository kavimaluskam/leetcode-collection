import React from "react"
import styled from "styled-components"

import AcceptanceIcon from "./acceptance.svg"
import LeetcodeIcon from "./leetcode.svg"

const Container = styled.div`
  border-top: 1px solid rgb(238, 238, 238);
  padding-top: 1rem;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding-bottom: 0.25rem;
`

const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding-bottom: 0.75rem;
`

const ResponsiveWrapper = styled(Wrapper)`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const TagsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  li {
    margin-left: 0.6em;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    li {
      margin-left: 0;
      margin-right: 0.6em;
    }
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

const Item = styled.li`
  display: flex;
  text-decoration: none;
  padding: 0.4em 0.6em;
  border-radius: 3px;
  font-size: 0.8rem;
  line-height: 1;
`

const Difficulty = styled(Item)`
  color: white;
  text-transform: lowercase;
  background-color: ${({ children }) => {
    if (children === "Easy") {
      return "#43a047"
    }
    if (children === "Medium") {
      return "#ef6c00"
    }
    if (children === "Hard") {
      return "#e91e63"
    }
  }};
`

const Acceptance = styled(Item)`
  color: #78757a;
`
const TagItem = styled(Item)`
  color: #9013fe;
  background: #f2e3ff;
`

const Metadata = ({ url, tags, difficulty, acceptance }) => (
  <Container>
    <Wrapper>
      <LeetcodeLink href={url}>
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
    <ResponsiveWrapper>
      <TagsWrapper>
        {tags.map(tag => (
          <TagItem key={tag}>{tag}</TagItem>
        ))}
      </TagsWrapper>
    </ResponsiveWrapper>
  </Container>
)

export default Metadata
