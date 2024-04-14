import { StateSchema } from 'app/providers/StoreProvider';

export const getActorError = (state: StateSchema) => state.actor?.error;