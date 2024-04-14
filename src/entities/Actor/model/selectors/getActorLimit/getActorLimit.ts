import { StateSchema } from 'app/providers/StoreProvider';

export const getActorLimit = (state: StateSchema) => state.actor?.limit;