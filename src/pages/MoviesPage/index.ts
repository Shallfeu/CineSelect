import { MoviesPageAsync } from './ui/MoviesPage/MoviesPage.async';
import { moviesPageReducer } from 'pages/MoviesPage/model/slices/moviesPageSlice';

export {
    MoviesPageAsync as MoviesPage,
    moviesPageReducer,
};

export type {
    MoviesPageSchema,
} from './model/types/moviesPageSchema';