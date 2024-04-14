import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PosterSchema } from 'entities/Poster/model/types/posterSchema';
import { fetchPosters } from 'entities/Poster/model/services/fetchPoster/fetchPosters';
import { Poster } from 'entities/Poster/model/types/poster';
import { Pagination } from 'shared/types/pagination';

const initialState: PosterSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    limit: 10,
};

export const posterSlice = createSlice({
    name: 'poster',
    initialState,
    reducers: {
        clearState(state) {
            state.data = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosters.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPosters.fulfilled, (
                state,
                action: PayloadAction<Pagination<Poster>>,
            ) => {
                const { docs } = action.payload;
                state.isLoading = false;
                state.data = docs;
            })
            .addCase(fetchPosters.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: posterActions } = posterSlice;
export const { reducer: posterReducer } = posterSlice;
