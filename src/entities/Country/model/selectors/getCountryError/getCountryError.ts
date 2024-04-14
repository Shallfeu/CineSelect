import { StateSchema } from 'app/providers/StoreProvider';

export const getCountryError = (state: StateSchema) => state.country?.error;