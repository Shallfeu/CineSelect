import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Poster } from 'entities/Poster/model/types/poster';
import { getPosterLimit } from 'entities/Poster/model/selectors/getPosterLimit/getPosterLimit';
import { Pagination } from 'shared/types/pagination';

export const postersAbortController = new AbortController();

export const fetchPosters = createAsyncThunk<
    Pagination<Poster>,
    string | undefined,
    ThunkConfig<string>
>(
    'poster/fetchPosters',
    async (movieId, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi;
        const limit = getPosterLimit(getState());

        if (!movieId) {
            throw new Error('');
        }

        const params = {
            movieId,
            limit,
            type: 'cover',
        };

        try {
            const response = await extra.api.get<Pagination<Poster>>('/v1.4/image', {
                params,
                signal: postersAbortController.signal,
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
