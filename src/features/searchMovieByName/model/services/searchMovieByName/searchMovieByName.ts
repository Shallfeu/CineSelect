import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSearch } from 'features/searchMovieByName/model/selectors/getSearch/getSearch';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Movie } from 'entities/Movie';
import { SearchService } from 'shared/lib/searchService/searchService';

interface ResponseType {
    docs: Movie[];
    page: number;
    pages: number;
    total: number;
    limit: number;
}

export const searchMovieByName = createAsyncThunk<
    ResponseType,
    void,
    ThunkConfig<string>
>(
    'movie/searchMovieByName',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const search = getSearch(getState());

        SearchService.saveSearch(search);

        const params = {
            query: search,
        };

        try {
            const response = await extra.api.get('/v1.4/movie/search', { params });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
