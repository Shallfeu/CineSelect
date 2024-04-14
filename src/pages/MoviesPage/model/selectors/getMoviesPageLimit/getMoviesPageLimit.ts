import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageLimit = (state: StateSchema) => state.moviesPage?.limit ?? 10;
