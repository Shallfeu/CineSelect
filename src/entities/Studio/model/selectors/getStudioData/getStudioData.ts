import { StateSchema } from 'app/providers/StoreProvider';

export const getStudioData = (state: StateSchema) => state.studio?.data ?? null;