import { RandomMoviePageAsync } from './ui/RandomMoviePage/RandomMoviePage.async';
import { randomMovieReducer } from './model/slice/RandomMovieSlice';
import { RandomMoviePageSchema } from './model/types/randomMoviePageSchema';

export {
    randomMovieReducer,
    RandomMoviePageAsync as RandomMoviePage,
};

export type {
    RandomMoviePageSchema,
};