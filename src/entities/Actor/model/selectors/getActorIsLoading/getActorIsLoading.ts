import { StateSchema } from 'app/providers/StoreProvider';

export const getActorIsLoading = (state: StateSchema) => state.actor?.isLoading;