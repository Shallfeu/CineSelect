import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initMoviesPage } from '../../model/services/initMoviesPage/initMoviesPage';
import { MoviesPageList } from '../MoviesPageList/MoviesPageList';
import { MoviesPageFilters } from 'pages/MoviesPage/ui/MoviesPageFilters/MoviesPageFilters';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { moviesPageReducer } from 'pages/MoviesPage';

const reducers: ReducersList = {
    moviesPage: moviesPageReducer,
};

const MoviesPage = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(initMoviesPage(searchParams));
        // eslint-disable-next-line
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                <div>
                    <MoviesPageFilters />
                </div>

                <div>
                    <MoviesPageList />
                </div>
            </Page>
        </DynamicModuleLoader>
    );
};

export default MoviesPage;