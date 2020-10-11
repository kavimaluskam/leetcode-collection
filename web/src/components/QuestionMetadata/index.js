import React from "react"
import styled from "styled-components"

import AcceptanceIcon from "./acceptance.svg"
import LeetcodeIcon from "./leetcode.svg"

const Wrapper = styled.div`
  display: flex;
  li {
    display: flex;
    text-decoration: none;
    padding: 0.4em 0.6em;
    border-radius: 3px;
    font-size: 0.8rem;
    line-height: 1;
  }
`

const LeetcodeLink = styled.a`
  color: #78757a;
  display: flex;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1;
  padding-bottom: 0.75rem;
  text-decoration: none;
`

const Difficulty = styled.li`
  color: white;
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

const Acceptance = styled.li`
  color: #78757a;
`

const TagsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  li {
    margin-left: 0.6em;
  }
`
const Item = styled.li`
  color: #9013fe;
  background: #f2e3ff;
`

const Metadata = ({ url, tags, difficulty, acceptance }) => (
  <>
    <Wrapper>
      <LeetcodeLink href={url}>
        <img src={LeetcodeIcon} alt="lc" />
        &nbsp;View question in leetcode
      </LeetcodeLink>
    </Wrapper>
    <Wrapper>
      <Difficulty>{difficulty}</Difficulty>
      <Acceptance>
        <img src={AcceptanceIcon} alt="accept" />
        &nbsp;{acceptance}
      </Acceptance>
      <TagsWrapper>
        {tags.map(tag => (
          <Item key={tag}>{tag}</Item>
        ))}
      </TagsWrapper>
    </Wrapper>
  </>
)

export default Metadata
