import React from 'react';
import './Pagination.css';
import PropTypes from 'prop-types';
const Pagination = (props) => {

    const { page, totalPages, handlePaginationClick } = props;

    return (

        <div className="Pagination">
            <button className="Pagination-button"
                    onClick = {handlePaginationClick}
                    disabled ={page<=1}>
                &larr;
            </button>
            <span className="Pagination-info">
                Page <b>{page}</b> of <b>{totalPages}</b>
            </span>
            <button className="Pagination-button"
                    onClick = {() => handlePaginationClick('next')}
                    disabled = {page>=totalPages}>
                &rarr;
            </button>
            
        </div>

    )
    //In react you don't have to place parenthesis after a function, when placing them in an event handler...

}
Pagination.PropTypes = {

    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handlePaginationClick: PropTypes.func.isRequired

}
export default Pagination;