import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Review } from '../../types/review';
import { getReviewPage } from '../../selectors/getReviewPage/getReviewPage';
import { getReviewLimit } from '../../selectors/getReviewLimit/getReviewLimit';
import { Pagination } from 'shared/types/pagination';

interface FetchReviewsProps {
    movieId: string;
    replace?: boolean;
}

export const reviewsAbortController = new AbortController();

export const fetchReviews = createAsyncThunk<
    Pagination<Review>,
    FetchReviewsProps,
    ThunkConfig<string>
>(
    'review/fetchReviews',
    async (args, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi;
        const { movieId } = args;

        const page = getReviewPage(getState());
        const limit = getReviewLimit(getState());

        if (!movieId) {
            throw new Error('');
        }

        const params = {
            movieId,
            page,
            limit,
        };

        try {
            const response = await extra.api.get<Pagination<Review>>('/v1.4/review', {
                params,
                signal: reviewsAbortController.signal,
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
