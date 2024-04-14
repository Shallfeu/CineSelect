import { StateSchema } from 'app/providers/StoreProvider';

export const getStudioError = (state: StateSchema) => state.studio?.error;