import { posterReducer } from './model/slice/posterSlice';
import { PosterCarousel } from './ui/PosterCarousel/PosterCarousel';
import { Poster } from './model/types/poster';
import { PosterSchema } from './model/types/posterSchema';

export {
    PosterCarousel,
    posterReducer,
};

export type {
    Poster,
    PosterSchema,
};