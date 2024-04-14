import { StateSchema } from 'app/providers/StoreProvider';

export const getSearch = (state: StateSchema) => state.searchMovie?.search;