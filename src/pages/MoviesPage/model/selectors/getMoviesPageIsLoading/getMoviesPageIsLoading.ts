import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageIsLoading = (state: StateSchema) => state.moviesPage?.isLoading ?? false;
