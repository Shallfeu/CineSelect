import { StateSchema } from 'app/providers/StoreProvider';

export const getReviewLimit = (state: StateSchema) => state.review?.limit;