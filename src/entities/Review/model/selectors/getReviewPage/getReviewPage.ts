import { StateSchema } from 'app/providers/StoreProvider';

export const getReviewPage = (state: StateSchema) => state.review?.page ?? 1;