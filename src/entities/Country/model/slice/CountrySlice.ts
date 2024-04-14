import { createSlice } from '@reduxjs/toolkit';
import { CountrySchema } from '../types/countrySchema';
import { fetchCountries } from '..//services/fetchCountries/fetchCountries';

const initialState: CountrySchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCountries.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: countryActions } = countrySlice;
export const { reducer: countryReducer } = countrySlice;
