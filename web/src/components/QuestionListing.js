import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Wrapper, Tag, Difficulty } from "./Badge"

const Container = styled.div`
  border-top: 1px solid var(--color-lightGrey);
  padding-top: 0.25rem;
  border-bottom: 1px solid var(--color-lightGrey);
  padding-bottom: 0.25rem;
  a {
    color: var(--color-text);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-primary);
  }
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
              <Difficulty difficulty={item.difficulty} />
              {item.tags.map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
            </Wrapper>
          )}
        </ListItem>
      ))}
    </Container>
  )
}

export default Listing
