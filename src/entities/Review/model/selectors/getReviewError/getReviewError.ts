import { StateSchema } from 'app/providers/StoreProvider';

export const getReviewError = (state: StateSchema) => state.review?.error;