import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageTotalPages = (state: StateSchema) => state.moviesPage?.pages ?? 1;
