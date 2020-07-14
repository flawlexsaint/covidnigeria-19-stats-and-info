import React, { useContext } from "react";
import { ResourcesContext } from "../Context/ResourcesContext";

export const Pagination = () => {
  const { ArticlePerPage, TotalArticle, handleChange } = useContext(ResourcesContext);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(TotalArticle / ArticlePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => handleChange(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
