import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import ReactPaginate from "react-paginate"

const Wrapper = styled.div`
  display: flex;

  ul {
    display: flex;
    padding: 0;
    width: 100%;
    justify-content: center;
  }

  li {
    display: flex;
    margin: 1rem;
    cursor: pointer;
  }

  li.active {
    color: var(--color-primary);
  }
  li.disabled {
    color: var(--color-background);
  }
  li.previous {
    margin-right: auto;
  }
  li.next {
    margin-left: auto;
  }
`

const Pagination = ({ prefix, numPages, currentPage }) => {
  if (numPages > 1) {
    return (
      <Wrapper>
        <ReactPaginate
          pageCount={numPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          initialPage={currentPage - 1}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          onPageChange={({ selected }) => {
            if (selected === 0) {
              navigate(`${prefix}`)
            } else {
              navigate(`${prefix}${selected + 1}`)
            }
          }}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </Wrapper>
    )
  }
  return <Wrapper />
}

export default Pagination
