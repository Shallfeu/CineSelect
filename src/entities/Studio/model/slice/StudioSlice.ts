import { createSlice } from '@reduxjs/toolkit';
import { StudioSchema } from '../types/studioSchema';
import { fetchStudios } from 'entities/Studio/model/services/fetchStudios/fetchStudios';

const initialState: StudioSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const studioSlice = createSlice({
    name: 'studio',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudios.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStudios.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStudios.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studioActions } = studioSlice;
export const { reducer: studioReducer } = studioSlice;
