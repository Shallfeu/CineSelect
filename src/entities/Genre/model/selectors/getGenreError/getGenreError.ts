import { StateSchema } from 'app/providers/StoreProvider';

export const getGenreError = (state: StateSchema) => state.genre?.error;