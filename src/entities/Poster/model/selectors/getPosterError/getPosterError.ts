import { StateSchema } from 'app/providers/StoreProvider';

export const getPosterError = (state: StateSchema) => state.poster?.error;