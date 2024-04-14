import { StateSchema } from 'app/providers/StoreProvider';

export const getSeasonPage = (state: StateSchema) => state.season?.page ?? 1;