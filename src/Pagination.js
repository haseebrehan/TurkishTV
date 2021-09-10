import React from 'react';
import classnames from 'classnames';
import { usePagination} from './usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul
    className={classnames('pagination-container', { [className]: className })}
  >

    {paginationRange.map(pageNumber => {
    

      return (
        <button
          className={classnames('pagination-item', ' btn btn-danger text-light col-1 d-flex justify-content-center fw-bold fs-6',{
            selected: pageNumber === currentPage
          })}
          onClick={() => onPageChange(pageNumber)}
        >
        <span>{pageNumber}</span> 
        </button>
      );
    })}

  </ul>
  );
};

export default Pagination;
