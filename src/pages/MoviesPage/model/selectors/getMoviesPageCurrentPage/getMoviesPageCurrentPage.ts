import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageCurrentPage = (state: StateSchema) => state.moviesPage?.page;
