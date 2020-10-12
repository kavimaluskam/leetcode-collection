import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding-bottom: 0.75rem;
`

const BadgeLink = styled(Link)`
  text-decoration: none;
`

const Item = styled.div`
  display: flex;
  text-decoration: none;
  padding: 0.4em 0.6em;
  border-radius: 3px;
  font-size: 0.8rem;
  line-height: 1;
  margin-right: 0.6rem;
`

export const Acceptance = styled(Item)`
  color: ${props => props.theme.color.lightGrey};
`
const TagWrapper = styled(Item)`
  color: ${props => props.theme.color.tag};
  background: ${props => props.theme.color.tagBackground};
`

export const Tag = ({ tag }) => (
  <BadgeLink to={`/tag/${tag}`}>
    <TagWrapper>{tag}</TagWrapper>
  </BadgeLink>
)

const DifficultyWrapper = styled(Item)`
  color: white;
  text-transform: lowercase;
  background-color: ${({ children, theme }) => {
    if (children === "Easy") {
      return theme.color.easy
    }
    if (children === "Medium") {
      return theme.color.medium
    }
    if (children === "Hard") {
      return theme.color.hard
    }
  }};
`

export const Difficulty = ({ difficulty }) => (
  <BadgeLink to={`/difficulty/${difficulty}`}>
    <DifficultyWrapper>{difficulty}</DifficultyWrapper>
  </BadgeLink>
)
