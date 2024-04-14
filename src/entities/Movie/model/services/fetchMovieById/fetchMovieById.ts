import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from 'entities/Movie';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const movieByIdAbortController = new AbortController();

export const fetchMovieById = createAsyncThunk<
    Movie,
    string | undefined,
    ThunkConfig<string>
>(
    'movieDetails/fetchMovieById',
    async (movieId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!movieId) {
            throw new Error('');
        }

        try {
            const response = await extra.api.get<Movie>(`/v1.4/movie/${movieId}`, {
                signal: movieByIdAbortController.signal,
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
