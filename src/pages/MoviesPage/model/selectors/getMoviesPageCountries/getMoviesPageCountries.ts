import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageCountries = (state: StateSchema) => state.moviesPage?.countries ?? null;
