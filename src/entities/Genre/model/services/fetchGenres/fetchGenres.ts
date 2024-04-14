import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Genre } from 'entities/Genre/model/types/genre';

export const genresAbortController = new AbortController();

export const fetchGenres = createAsyncThunk<
    Genre[],
    void,
    ThunkConfig<string>
>(
    'genre/fetchGenres',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        const params = {
            field: 'genres.name',
        };

        try {
            const response = await extra.api.get<Genre[]>('/v1/movie/possible-values-by-field', {
                params,
                signal: genresAbortController.signal,
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
