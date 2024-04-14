import { StateSchema } from 'app/providers/StoreProvider';

export const getSeasonError = (state: StateSchema) => state.season?.error;