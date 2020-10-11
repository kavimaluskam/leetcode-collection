import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const Listing = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <Link to={`/question/${item.id}`}>
            {item.id}: {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Listing
