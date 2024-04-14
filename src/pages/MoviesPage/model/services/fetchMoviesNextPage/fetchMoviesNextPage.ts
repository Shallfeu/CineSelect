import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getMoviesPageHasMore } from '../../selectors/getMoviesPageHasMore/getMoviesPageHasMore';
import { getMoviesPageIsLoading } from '../../selectors/getMoviesPageIsLoading/getMoviesPageIsLoading';
import { fetchMovies } from '../fetchMovies/fetchMovies';

export const fetchMoviesNextPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'moviesPage/fetchMoviesNextPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getMoviesPageHasMore(getState());
        const isLoading = getMoviesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(fetchMovies());
        }
    },
);
