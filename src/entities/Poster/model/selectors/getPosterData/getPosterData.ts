import { StateSchema } from 'app/providers/StoreProvider';

export const getPosterData = (state: StateSchema) => state.poster?.data ?? [];