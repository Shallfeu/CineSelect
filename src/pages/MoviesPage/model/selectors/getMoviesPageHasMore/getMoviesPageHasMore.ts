import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageHasMore = (state: StateSchema) => state.moviesPage?.hasMore;
