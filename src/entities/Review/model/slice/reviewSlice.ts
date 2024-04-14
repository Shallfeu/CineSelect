import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewSchema } from 'entities/Review/model/types/reviewSchema';
import { fetchReviews } from 'entities/Review/model/services/fetchReviews/fetchReviews';
import { Review } from 'entities/Review/model/types/review';
import { StateSchema } from 'app/providers/StoreProvider';

const initialState: ReviewSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    limit: 3,
    hasMore: true,
};

const reviewAdapter = createEntityAdapter<Review>();

export const getReviews = reviewAdapter.getSelectors<StateSchema>(
    (state) => state.review || reviewAdapter.getInitialState(),
);
export const reviewSlice = createSlice({
    name: 'review',
    initialState: reviewAdapter.getInitialState<ReviewSchema>(initialState),
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        clearState(state) {
            reviewAdapter.removeAll(state)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    reviewAdapter.removeAll(state);
                }
            })
            .addCase(fetchReviews.fulfilled, (
                state,
                action,
            ) => {
                const { docs, page, pages } = action.payload;
                state.isLoading = false;
                state.hasMore = page < pages;

                if (action.meta.arg.replace) {
                    reviewAdapter.setAll(state, docs);
                } else {
                    reviewAdapter.addMany(state, docs);
                }
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: reviewActions } = reviewSlice;
export const { reducer: reviewReducer } = reviewSlice;
