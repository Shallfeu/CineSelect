import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Movie } from 'entities/Movie';
import { fetchMovies } from 'pages/MoviesPage/model/services/fetchMovies/fetchMovies';
import { MoviesPageSchema } from 'pages/MoviesPage/model/types/moviesPageSchema';
import { DEFAULT_AGE, DEFAULT_YEAR } from 'shared/const/movieConsts';

const initialState = {
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
    page: 1,
    pages: 1,
    hasMore: true,
    limit: 10,
    _inited: false,

    defaultYear: DEFAULT_YEAR,
    defaultAge: DEFAULT_AGE,
}

const moviesAdapter = createEntityAdapter<Movie>({});

export const getMovies = moviesAdapter.getSelectors<StateSchema>(
    (state) => state.moviesPage || moviesAdapter.getInitialState(),
);

const moviesPageSlice = createSlice({
    name: 'moviesPageSlice',
    initialState: moviesAdapter.getInitialState<MoviesPageSchema>(initialState),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setYear: (state, action: PayloadAction<number[]>) => {
            state.year = action.payload;
        },
        setCountries: (state, action: PayloadAction<string[]>) => {
            state.countries = action.payload;
        },
        setAgeRating: (state, action: PayloadAction<number[]>) => {
            state.ageRating = action.payload;
        },
        initState: (state) => {
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMovies.fulfilled, (
                state,
                action,
            ) => {
                const { docs, pages } = action.payload;
                state.isLoading = false;

                moviesAdapter.setAll(state, docs);

                state.hasMore = state.page < pages;
                state.pages = pages;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: moviesPageReducer,
    actions: moviesPageActions,
} = moviesPageSlice;
