import { StateSchema } from 'app/providers/StoreProvider';

export const getSeasonIsLoading = (state: StateSchema) => state.season?.isLoading ?? false;