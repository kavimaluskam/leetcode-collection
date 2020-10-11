import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Wrapper, Tag, Difficulty } from "./Badge"

const Container = styled.div`
  border-top: 1px solid rgb(238, 238, 238);
  padding-top: 0.25rem;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding-bottom: 0.25rem;
`

const ListItem = styled.div`
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
`

const Listing = ({ listing, showMetadata = false }) => {
  const list = listing.edges.map(
    ({
      node: {
        frontmatter: { ...data },
      },
    }) => data
  )

  return (
    <Container>
      {list.map(item => (
        <ListItem key={item.id}>
          <Link to={`/question/${item.id}`}>
            <h2>
              {item.id}: {item.title}
            </h2>
          </Link>
          {showMetadata && (
            <Wrapper>
              <Difficulty>{item.difficulty}</Difficulty>
              {item.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Wrapper>
          )}
        </ListItem>
      ))}
    </Container>
  )
}

export default Listing
