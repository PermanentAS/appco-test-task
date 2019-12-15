import React from "react";
import "./pagination.scss";

const Pagination = ({ paginationClickHandler, currentPage }) => {
  const renderPages = currentPage => {
    let pagesArray = [];
    if (currentPage === 1) {
      pagesArray = [
        currentPage,
        currentPage + 1,
        currentPage + 2,
        currentPage + 3,
        currentPage + 4
      ];
    }
    if (currentPage === 2) {
      pagesArray = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        currentPage + 3
      ];
    } 
    if (currentPage >= 3) {
      pagesArray = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2
      ];
    }

    return pagesArray.map(number => {
      return (
        <li
          className={`page-item ${currentPage === number ? "active" : ""}`}
          key={number}
          onClick={() => {
            paginationClickHandler(number);
          }}
        >
          <span className="page-link">{number}</span>
        </li>
      );
    });
  };

  return (
    <ul className="pagination justify-content-center">
      <li
        className={`page-item  ${currentPage <= 1 ? "disabled" : ""}`}
        onClick={() => {
          paginationClickHandler(currentPage - 1);
        }}
      >
        <i className="fas fa-chevron-left page-link"></i>
      </li>
      {renderPages(currentPage)}
      <li
        className="page-item"
        onClick={() => {
          paginationClickHandler(currentPage + 1);
        }}
      >
        <i className="fas fa-chevron-right page-link"></i>
      </li>
    </ul>
  );
};

export default Pagination;
