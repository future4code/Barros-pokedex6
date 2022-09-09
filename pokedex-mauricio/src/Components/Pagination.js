import React from "react";
import { PaginationStyle } from "./Styled";
const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <PaginationStyle>
      <div className="pagination-container">
        <button onClick={onLeftClick}>
          <div>↩️</div>
        </button>
        <div>
          {page} de {totalPages}
        </div>
        <button onClick={onRightClick}>
          <div>➡️</div>
        </button>
      </div>
    </PaginationStyle>
  );
};
export default Pagination;
