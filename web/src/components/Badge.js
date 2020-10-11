import styled from "styled-components"

export const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding-bottom: 0.75rem;
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
  color: #78757a;
`
export const Tag = styled(Item)`
  color: #9013fe;
  background: #f2e3ff;
`

export const Difficulty = styled(Item)`
  display: flex;
  text-decoration: none;
  padding: 0.4em 0.6em;
  border-radius: 3px;
  font-size: 0.8rem;
  line-height: 1;
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
