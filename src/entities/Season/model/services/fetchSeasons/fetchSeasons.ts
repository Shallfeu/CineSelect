import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Season } from 'entities/Season/model/types/season';
import { getSeasonPage } from 'entities/Season/model/selectors/getSeasonPage/getSeasonPage';
import { getSeasonLimit } from 'entities/Season/model/selectors/getSeasonLimit/getSeasonLimit';
import { Pagination } from 'shared/types/pagination';

interface FetchSeasonsProps {
    movieId: string;
    replace?: boolean;
}

export const seasonsAbortController = new AbortController();

export const fetchSeasons = createAsyncThunk<
    Pagination<Season>,
    FetchSeasonsProps,
    ThunkConfig<string>
>(
    'season/fetchSeasons',
    async (args, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi;
        const { movieId } = args;

        const page = getSeasonPage(getState());
        const limit = getSeasonLimit(getState());

        if (!movieId) {
            throw new Error('');
        }

        const params = {
            movieId,
            page,
            limit,
            sortField: 'airDate',
            sortType: 1,
        };

        try {
            const response = await extra.api.get<Pagination<Season>>('/v1.4/season', {
                params,
                signal: seasonsAbortController.signal,
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
