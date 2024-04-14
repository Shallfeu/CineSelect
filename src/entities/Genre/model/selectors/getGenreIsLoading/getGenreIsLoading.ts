import { StateSchema } from 'app/providers/StoreProvider';

export const getGenreIsLoading = (state: StateSchema) => state.genre?.isLoading;