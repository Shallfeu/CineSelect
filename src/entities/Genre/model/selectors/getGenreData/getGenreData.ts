import { StateSchema } from 'app/providers/StoreProvider';

export const getGenreData = (state: StateSchema) => state.genre?.data ?? null;