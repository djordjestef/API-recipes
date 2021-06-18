import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ data, currentPage, setCurrentPage }) => {

    const pages = [];

    for (let i = 1; i <= data.totalPages; i++) {
        pages.push(i)
    }
    return (
        <div className={classes.pagination_wrapper}>
            {
                pages.map(page => {
                    return (
                        <button
                            autoFocus={currentPage === page}
                            key={page}
                            className={classes.pagination_btn}
                            onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination;