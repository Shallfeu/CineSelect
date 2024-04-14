import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RandomMoviePageSchema } from 'pages/RandomMoviePage/model/types/randomMoviePageSchema';
import { fetchRandomMovie } from '../services/fetchRandomMovie/fetchRandomMovie';
import { DEFAULT_YEAR } from 'shared/const/movieConsts';

const initialState: RandomMoviePageSchema = {
    isLoading: false,
    error: '',
    isSeries: false,
    rating: 5,

    defaultYear: DEFAULT_YEAR,
};

const randomMovieSlice = createSlice({
    name: 'randomMovieSlice',
    initialState,
    reducers: {
        setYear: (state, action: PayloadAction<number[]>) => {
            state.year = action.payload;
        },
        setCountries: (state, action: PayloadAction<string[]>) => {
            state.countries = action.payload;
        },
        setGenres: (state, action: PayloadAction<string[]>) => {
            state.genres = action.payload;
        },
        setStudios: (state, action: PayloadAction<string[]>) => {
            state.studios = action.payload;
        },
        setRating: (state, action: PayloadAction<number>) => {
            state.rating = action.payload;
        },
        setIsSeries: (state, action: PayloadAction<boolean>) => {
            state.isSeries = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomMovie.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.data = undefined;
            })
            .addCase(fetchRandomMovie.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchRandomMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: randomMovieReducer,
    actions: randomMovieActions,
} = randomMovieSlice;
