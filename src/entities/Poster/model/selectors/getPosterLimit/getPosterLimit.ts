import { StateSchema } from 'app/providers/StoreProvider';

export const getPosterLimit = (state: StateSchema) => state.poster?.limit;