import { StateSchema } from 'app/providers/StoreProvider';

export const getReviewIsLoading = (state: StateSchema) => state.review?.isLoading ?? false;