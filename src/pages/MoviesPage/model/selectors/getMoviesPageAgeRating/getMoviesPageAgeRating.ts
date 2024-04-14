import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageAgeRating = (state: StateSchema) => state.moviesPage?.ageRating ?? null;
