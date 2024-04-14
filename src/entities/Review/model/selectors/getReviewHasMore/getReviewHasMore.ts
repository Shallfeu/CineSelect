import { StateSchema } from 'app/providers/StoreProvider';

export const getReviewHasMore = (state: StateSchema) => state.review?.hasMore ?? false;