import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from 'entities/Movie';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getRandomMoviePageYear,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageYear/getRandomMoviePageYear';
import {
    getRandomMoviePageCountries,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageCountries/getRandomMoviePageCountries';
import {
    getRandomMoviePageGenres,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageGenres/getRandomMoviePageGenres';
import {
    getRandomMoviePageStudios,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageStudios/getRandomMoviePageStudios';
import {
    getRandomMoviePageRating,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageRating/getRandomMoviePageRating';
import {
    getRandomMoviePageIsSeries,
} from 'pages/RandomMoviePage/model/selectors/getRandomMoviePageIsSeries/getRandomMoviePageIsSeries';

export const randomMovieAbortController = new AbortController();

export const fetchRandomMovie = createAsyncThunk<
    Movie,
    void,
    ThunkConfig<string>
>(
    'randomMovie/fetchRandomMovie',
    async (_, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi;

        const year = getRandomMoviePageYear(getState());
        const countries = getRandomMoviePageCountries(getState());
        const genres = getRandomMoviePageGenres(getState());
        const studios = getRandomMoviePageStudios(getState());
        const rating = getRandomMoviePageRating(getState());
        const isSeries = getRandomMoviePageIsSeries(getState());

        const countriesQueryString = countries?.map(country => {
            return `countries.name=${country}`;
        }).join('&');

        const genresQueryString = genres?.map(genre => {
            return `genres.name=${genre}`;
        }).join('&');

        const studiosQueryString = studios?.map(studio => {
            return `networks.items.name=${studio}`;
        }).join('&');

        // It's bad, but I spent a lot of time figuring out how to do it right
        // so I leave it like this
        const baseUrl = '/v1.4/movie/random';

        let additionalUrl = '';

        if (countries?.length) {
            additionalUrl += `${countriesQueryString}&`;
        }

        if (genres?.length) {
            additionalUrl += `${genresQueryString}&`;
        }

        if (studios?.length) {
            additionalUrl += `${studiosQueryString}&`;
        }

        if (additionalUrl[additionalUrl.length - 1] === '&') {
            additionalUrl = additionalUrl.slice(0, additionalUrl.length - 1);
        }

        const url = additionalUrl.length ? `${baseUrl}?${additionalUrl}` : baseUrl;

        const params = {
            year: year ? `${year[0]}-${year[1]}` : null,
            ['rating.imdb']: `${rating}-10`,
            isSeries,
            notNullFields: 'name',
        };

        try {
            const response = await extra.api.get<Movie>(url, {
                params,
                signal: randomMovieAbortController.signal,
            });

            if (response.data === undefined) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
