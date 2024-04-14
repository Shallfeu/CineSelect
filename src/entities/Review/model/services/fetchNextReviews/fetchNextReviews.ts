import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchReviews } from '../fetchReviews/fetchReviews';
import { getReviewHasMore } from '../../selectors/getReviewHasMore/getReviewHasMore';
import { getReviewPage } from '../../selectors/getReviewPage/getReviewPage';
import { getReviewIsLoading } from '../../selectors/getReviewIsLoading/getReviewIsLoading';
import { reviewActions } from '../../slice/reviewSlice';

interface FetchNextReviewsProps {
    movieId: string;
    replace?: boolean;
}

export const fetchNextReviews = createAsyncThunk<
    void,
    FetchNextReviewsProps,
    ThunkConfig<string>
>(
    'review/fetchNextReviews',
    async (args, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const hasMore = getReviewHasMore(getState());
        const page = getReviewPage(getState());
        const isLoading = getReviewIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(reviewActions.setPage(page + 1));
            dispatch(fetchReviews(args));
        }
    },
);
