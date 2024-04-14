import { StateSchema } from 'app/providers/StoreProvider';

export const getActorHasMore = (state: StateSchema) => state.actor?.hasMore;