import { createAsyncThunk } from '@reduxjs/toolkit';
import { Actor } from '../../types/actor';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Pagination } from 'shared/types/pagination';
import { getActorPage } from '../../selectors/getActorPage/getActorPage';
import { getActorLimit } from '../../selectors/getActorLimit/getActorLimit';

interface FetchActorsProps {
    movieId: string;
    replace?: boolean;
}

export const actorsAbortController = new AbortController();

export const fetchActors = createAsyncThunk<
    Pagination<Actor>,
    FetchActorsProps,
    ThunkConfig<string>
>(
    'actor/fetchActors',
    async (args, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi;
        const { movieId } = args;

        const page = getActorPage(getState());
        const limit = getActorLimit(getState());

        if (!movieId) {
            throw new Error('');
        }

        const params = {
            ['movies.id']: movieId,
            page,
            limit,
        };

        try {
            const response = await extra.api.get<Pagination<Actor>>('/v1.4/person', {
                params,
                signal: actorsAbortController.signal,
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
