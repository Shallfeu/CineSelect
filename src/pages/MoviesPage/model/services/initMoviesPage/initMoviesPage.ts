import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from 'pages/MoviesPage/model/services/fetchMovies/fetchMovies';
import { getMoviesPageInited } from 'pages/MoviesPage/model/selectors/getMoviesPageInited/getMoviesPageInited';
import { StateSchema } from 'app/providers/StoreProvider';
import { moviesPageActions } from 'pages/MoviesPage/model/slices/moviesPageSlice';

export const initMoviesPage = createAsyncThunk<
    void,
    URLSearchParams,
    { state: StateSchema }
>(
    'moviesPage/initMoviesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getMoviesPageInited(getState());

        if (!inited) {
            const page = searchParams.get('page');
            const limit = searchParams.get('limit');
            const year = searchParams.get('year')?.split('-').map(Number);
            const ageRating = searchParams.get('ageRating')?.split('-').map(Number);
            const countries = searchParams.get('countries')?.split('_');

            if (page) {
                dispatch(moviesPageActions.setPage(Number(page)));
            }
            if (limit) {
                dispatch(moviesPageActions.setLimit(Number(limit)));
            }
            if (year) {
                dispatch(moviesPageActions.setYear(year));
            }
            if (ageRating) {
                dispatch(moviesPageActions.setAgeRating(ageRating));
            }
            if (countries) {
                dispatch(moviesPageActions.setCountries(countries));
            }

            dispatch(moviesPageActions.initState());
            // @ts-expect-error TS2369
            dispatch(fetchMovies());
        }
    },
);
