import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchMovieByNameSchema } from '../types/searchMovieByNameSchema';
import { searchMovieByName } from 'features/searchMovieByName/model/services/searchMovieByName/searchMovieByName';

const initialState: SearchMovieByNameSchema = {
    search: '',
    isLoading: false,
};

export const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchMovieByName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(searchMovieByName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchResults = action.payload.docs;
            })
            .addCase(searchMovieByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: searchMovieActions } = searchMovieSlice;
export const { reducer: searchMovieReducer } = searchMovieSlice;
