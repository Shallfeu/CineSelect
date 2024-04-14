import ReactPaginate from 'react-paginate';
import React from 'react';
import './Pagination.scss';
import { PaginationButton } from 'shared/ui/Pagination/PaginationButton';

interface PaginationProps {
    onPageClick: (event: { selected: number }) => void;
    totalPages: number;
    page: number;
    isLoading: boolean;
}

export const Pagination = (props: PaginationProps) => {
    const { isLoading, totalPages, page, onPageClick } = props;

    return (
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel={<PaginationButton isDisabled={page === totalPages || isLoading} />}
            onPageChange={onPageClick}
            pageRangeDisplayed={0}
            pageCount={totalPages}
            previousLabel={<PaginationButton isDisabled={page === 1 || isLoading} isLeft />}
        />
    );
};