import React from "react";
import "./pagination.scss";

const Pagination = ({page, totalPages, prevPage, nextPage, setPage, }) => {
  return (
<div className="pagination">
  <button onClick={prevPage} className="pagination__button">
    &larr;
  </button>
  {[...Array(totalPages).keys()].map((el) => (
    <button
      onClick={() => setPage(el + 1)}
      key={el}
      className={`pagination__button   ${page === el + 1 ? "pagination__button_active" : ""}`}
    >
      {el + 1}
    </button>
  ))}
  <button onClick={nextPage} className="pagination__button">
    &rarr;
  </button>
</div>
  );
};

export default Pagination;
