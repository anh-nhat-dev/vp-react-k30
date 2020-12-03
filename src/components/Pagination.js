import React from "react";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";

const Pagination = ({ limit = 10, totalDocument = 0 }) => {
  const totalPage = Math.ceil(totalDocument / limit);

  const location = useLocation();

  const pathname = location.pathname;
  const search = queryString.parse(location.search);
  const page = parseInt(search.page) || 1;

  function makeUrl(page) {
    return `${pathname}?${queryString.stringify({ ...search, page: page })}`;
  }

  function renderPage() {
    const pages = [],
      pagesWithDot = [];
    const left = page - 2;
    const right = page + 2;

    for (let i = 1; i <= totalPage; i++) {
      if (i === 1 || i === totalPage || (i >= left && i <= right)) {
        pages.push(i);
      }
    }

    let i = 0;
    while (i < pages.length) {
      pagesWithDot.push(pages[i]);
      if (pages[i + 1] - pages[i] > 1) {
        pagesWithDot.push("...");
      }

      ++i;
    }

    return pagesWithDot.map((i) => (
      <li className={`page-item ${page === i ? "active" : null} `}>
        <Link className="page-link" to={makeUrl(i)}>
          {i}
        </Link>
      </li>
    ));
  }

  return (
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#">
          Trang trước
        </a>
      </li>
      {renderPage()}
      <li className="page-item">
        <a className="page-link" href="#">
          Trang sau
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
