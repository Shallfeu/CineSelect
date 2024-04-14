import { StateSchema } from 'app/providers/StoreProvider';

export const getPosterIsLoading = (state: StateSchema) => state.poster?.isLoading;