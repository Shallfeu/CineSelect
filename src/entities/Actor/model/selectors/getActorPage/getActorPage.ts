import { StateSchema } from 'app/providers/StoreProvider';

export const getActorPage = (state: StateSchema) => state.actor?.page ?? 1;