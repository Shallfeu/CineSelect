import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchError = (state: StateSchema) => state.searchMovie?.error;