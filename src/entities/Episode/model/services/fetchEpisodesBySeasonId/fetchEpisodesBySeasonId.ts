import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Season } from 'entities/Season/model/types/season';
import { Pagination } from 'shared/types/pagination';

export const fetchEpisodesBySeasonId = createAsyncThunk<
    Pagination<Season>,
    { movieId: string; seasonId: string; },
    ThunkConfig<string>
>(
    'episode/fetchEpisodesBySeasonId',
    async ({ movieId, seasonId }, thunkApi) => {
        const { extra,rejectWithValue } = thunkApi;

        if (!seasonId) {
            throw new Error('');
        }

        const params = {
            number: seasonId,
            movieId: movieId,
            sortField: 'airDate',
            sortType: 1,
        };

        try {
            const response = await extra.api.get<Pagination<Season>>('/v1.4/season', { params });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
