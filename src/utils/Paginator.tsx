type PaginatorType = {
  totalPages: number
  currentPage: number
  changePage: (page: number) => void
}

export const Paginator: React.FC<PaginatorType> = ({
  totalPages,
  currentPage,
  changePage,
}) => {
  let startPage: number, endPage: number
  if (totalPages <= 10) {
    // less than 10 total pages so show all
    startPage = 1
    endPage = totalPages
  } else {
    // more than 10 total pages so calculate start and end pages
    if (currentPage <= 6) {
      startPage = 1
      endPage = 10
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9
      endPage = totalPages
    } else {
      startPage = currentPage - 5
      endPage = currentPage + 4
    }
  }

  const toStartPage = () => {
    changePage(1)
  }

  const toEndPage = () => {
    changePage(totalPages)
  }
  const prevPage = () => {
    if (currentPage === 1 || currentPage < 1) return false
    changePage(currentPage - 1)
  }
  const nextPage = () => {
    if (currentPage > totalPages || currentPage === totalPages) return false
    changePage(currentPage + 1)
  }
  // create an array of pages to ng-repeat in the pager control
  const pages: number[] = [...Array(endPage + 1 - startPage).keys()].map(
    (i) => startPage + i
  )

  const pageItem = pages.map((page: number) => {
    return (
      <li key={page}>
        <span
          onClick={() => changePage(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </span>
      </li>
    )
  })
  return (
    <ul className="pagination">
      <li>
        <span onClick={toStartPage}>To start</span>
      </li>
      <li>
        <span onClick={prevPage}>Prev</span>
      </li>
      {pageItem}
      <li>
        <span onClick={nextPage}>Next</span>
      </li>
      <li>
        <span onClick={toEndPage}>To end</span>
      </li>
    </ul>
  )
}
