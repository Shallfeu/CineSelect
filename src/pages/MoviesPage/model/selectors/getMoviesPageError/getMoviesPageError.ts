import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageError = (state: StateSchema) => state.moviesPage?.error;
