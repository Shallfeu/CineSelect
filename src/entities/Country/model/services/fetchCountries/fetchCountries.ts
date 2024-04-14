import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Genre } from 'entities/Genre/model/types/genre';

export const countriesAbortController = new AbortController();

export const fetchCountries = createAsyncThunk<
    Genre[],
    void,
    ThunkConfig<string>
>(
    'country/fetchCountries',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        const params = {
            field: 'countries.name',
        };

        try {
            const response = await extra.api.get<Genre[]>('/v1/movie/possible-values-by-field', {
                params,
                signal: countriesAbortController.signal,
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
