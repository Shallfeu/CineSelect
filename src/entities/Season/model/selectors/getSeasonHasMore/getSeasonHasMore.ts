import { StateSchema } from 'app/providers/StoreProvider';

export const getSeasonHasMore = (state: StateSchema) => state.season?.hasMore ?? false;