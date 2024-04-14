import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageYear = (state: StateSchema) => state.moviesPage?.year ?? null;
