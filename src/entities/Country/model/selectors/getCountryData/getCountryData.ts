import { StateSchema } from 'app/providers/StoreProvider';

export const getCountryData = (state: StateSchema) => state.country?.data ?? null;