import { StateSchema } from 'app/providers/StoreProvider';

export const getCountryIsLoading = (state: StateSchema) => state.country?.isLoading;