import { MovieList } from 'entities/Movie';
import { useSelector } from 'react-redux';
import { getMovies, moviesPageActions } from '../../model/slices/moviesPageSlice';
import React from 'react';
import {
    getMoviesPageTotalPages,
} from '../../model/selectors/getMoviesPageTotalPages/getMoviesPageTotalPages';
import { Pagination } from 'shared/ui/Pagination/Pagination';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchMoviesNextPage } from '../../model/services/fetchMoviesNextPage/fetchMoviesNextPage';
import { getMoviesPageIsLoading } from 'pages/MoviesPage/model/selectors/getMoviesPageIsLoading/getMoviesPageIsLoading';
import { getMoviesPagePage } from '../../model/selectors/getMoviesPagePage/getMoviesPagePage';
import cls from './MoviesPageList.module.scss';
import { Box, Flex, Heading } from '@chakra-ui/react';

export const MoviesPageList = () => {
    const dispatch = useAppDispatch();

    const movies = useSelector(getMovies.selectAll);
    const page = useSelector(getMoviesPagePage);
    const totalPages = useSelector(getMoviesPageTotalPages);
    const isLoading = useSelector(getMoviesPageIsLoading);

    const loadNextPartHandler = () => {
        dispatch(fetchMoviesNextPage());
    };

    const handlePageClick = (event: { selected: number }) => {
        const currentPage = event.selected + 1;
        dispatch(moviesPageActions.setPage(currentPage));
        loadNextPartHandler();
    };

    if (!movies.length) {
        return (
            <Flex justify="center" align="center">
                <Heading>Нет данных по данному запросу</Heading>
            </Flex>
        );
    }

    return (
        <>
            <MovieList movies={movies} isLoading={isLoading} />

            <div className={cls.pagination}>
                <Pagination isLoading={isLoading} page={page} totalPages={totalPages} onPageClick={handlePageClick} />
            </div>
        </>
    );
};