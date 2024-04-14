import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from 'entities/Movie';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getMoviesPageCurrentPage,
} from '../../selectors/getMoviesPageCurrentPage/getMoviesPageCurrentPage';
import { getMoviesPageLimit } from '../../selectors/getMoviesPageLimit/getMoviesPageLimit';
import { getMoviesPageYear } from '../../selectors/getMoviesPageYear/getMoviesPageYear';
import { getMoviesPageAgeRating } from '../../selectors/getMoviesPageAgeRating/getMoviesPageAgeRating';
import { getMoviesPageCountries } from '../../selectors/getMoviesPageCountries/getMoviesPageCountries';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { removeNullUndefined } from 'shared/lib/helpers/removeNullUndefinedFromObject/removeNullUndefinedFromObject';
import { SELECT_FIELDS_QUERY_STRING } from 'shared/const/movieConsts';

export const moviesAbortController = new AbortController();

export interface ResponseType {
    docs: Movie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}

export const fetchMovies = createAsyncThunk<
    ResponseType,
    void,
    ThunkConfig<string>
>(
    'moviesPage/fetchMovies',
    async (props, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi;
        const limit = getMoviesPageLimit(getState());
        const year = getMoviesPageYear(getState());
        const age = getMoviesPageAgeRating(getState());
        const countries = getMoviesPageCountries(getState());
        const page = getMoviesPageCurrentPage(getState());

        const countriesQueryString = countries?.map(country => {
            return `countries.name=${country}`;
        }).join('&');

        // It's bad, but I spent a lot of time figuring out how to do it right
        // so I leave it like this
        const baseUrl = `/v1.4/movie?${SELECT_FIELDS_QUERY_STRING}`;

        const url = countries?.length ? `${baseUrl}&${countriesQueryString}` : baseUrl;

        const params = {
            page,
            limit,
            year: year ? `${year[0]}-${year[1]}` : null,
            ageRating: age ? `${age[0]}-${age[1]}` : null,
        };

        const paramsForUrl = removeNullUndefined({
            ...params,
            countries: countries?.length ? countries?.join('_') : null,
        });

        try {
            addQueryParams(paramsForUrl);

            const response = await extra.api.get<ResponseType>(url, {
                signal: moviesAbortController.signal,
                params,
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
