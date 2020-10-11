import React from "react"
import { Link } from "gatsby"

import { Wrapper, Tag, Difficulty } from "./Badge"

const Listing = ({ listing, showMetadata = false }) => {
  const list = listing.edges.map(
    ({
      node: {
        frontmatter: { ...data },
      },
    }) => data
  )

  return (
    <>
      {list.map(item => (
        <div key={item.id}>
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
        </div>
      ))}
    </>
  )
}

export default Listing
