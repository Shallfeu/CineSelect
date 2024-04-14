import { StateSchema } from 'app/providers/StoreProvider';

export const getStudioIsLoading = (state: StateSchema) => state.studio?.isLoading;