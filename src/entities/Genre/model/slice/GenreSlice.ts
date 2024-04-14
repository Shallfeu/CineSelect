import { createSlice } from '@reduxjs/toolkit';
import { GenreSchema } from '../types/genreSchema';
import { fetchGenres } from '../services/fetchGenres/fetchGenres';

const initialState: GenreSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchGenres.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: genreActions } = genreSlice;
export const { reducer: genreReducer } = genreSlice;
