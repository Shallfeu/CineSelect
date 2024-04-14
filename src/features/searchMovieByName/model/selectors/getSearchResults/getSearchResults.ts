import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchResults = (state: StateSchema) => state.searchMovie?.searchResults;