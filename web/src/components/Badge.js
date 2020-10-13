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
  color: var(--color-lightGrey);
`

const TagWrapper = styled(Item)`
  color: var(--color-background);
  background: var(--color-tag);
`

export const Tag = ({ tag }) => (
  <BadgeLink to={`/tag/${tag}`}>
    <TagWrapper>{tag}</TagWrapper>
  </BadgeLink>
)

const DifficultyWrapper = styled(Item)`
  color: var(--color-background);
  text-transform: lowercase;
  background-color: ${({ children }) => {
    if (children === "Easy") {
      return "var(--color-easy)"
    }
    if (children === "Medium") {
      return "var(--color-medium)"
    }
    if (children === "Hard") {
      return "var(--color-hard)"
    }
  }};
`

export const Difficulty = ({ difficulty }) => (
  <BadgeLink to={`/difficulty/${difficulty}`}>
    <DifficultyWrapper>{difficulty}</DifficultyWrapper>
  </BadgeLink>
)
