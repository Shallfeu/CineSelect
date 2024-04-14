import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPagePage = (state: StateSchema) => state.moviesPage?.page ?? 1;
