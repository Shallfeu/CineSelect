import { StateSchema } from 'app/providers/StoreProvider';

export const getSeasonLimit = (state: StateSchema) => state.season?.limit;