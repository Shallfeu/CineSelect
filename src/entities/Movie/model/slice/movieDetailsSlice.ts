import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetailsSchema } from '../types/movieDetails';
import { fetchMovieById } from '../../model/services/fetchMovieById/fetchMovieById';
import { Movie } from '../types/movie';

const initialState: MovieDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMovieById.fulfilled, (
                state,
                action: PayloadAction<Movie>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: movieDetailsActions } = movieDetailsSlice;
export const { reducer: movieDetailsReducer } = movieDetailsSlice;
