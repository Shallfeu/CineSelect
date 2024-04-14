import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SeasonSchema } from 'entities/Season/model/types/seasonSchema';
import { Season } from 'entities/Season/model/types/season';
import { fetchSeasons } from 'entities/Season/model/services/fetchSeasons/fetchSeasons';
import { StateSchema } from 'app/providers/StoreProvider';

const initialState: SeasonSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    limit: 5,
    hasMore: false,
};

const seasonsAdapter = createEntityAdapter<Season>();

export const getSeasons = seasonsAdapter.getSelectors<StateSchema>(
    (state) => state.season || seasonsAdapter.getInitialState(),
);

export const seasonSlice = createSlice({
    name: 'season',
    initialState: seasonsAdapter.getInitialState<SeasonSchema>(initialState),
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        clearState(state) {
            seasonsAdapter.removeAll(state);
            state.page = 1;
            state.hasMore = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeasons.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    seasonsAdapter.removeAll(state);
                }
            })
            .addCase(fetchSeasons.fulfilled, (
                state,
                action,
            ) => {
                const { docs, page, pages } = action.payload;
                state.isLoading = false;
                state.hasMore = page < pages;

                if (action.meta.arg.replace) {
                    seasonsAdapter.setAll(state, docs);
                } else {
                    seasonsAdapter.addMany(state, docs);
                }
            })
            .addCase(fetchSeasons.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: seasonActions } = seasonSlice;
export const { reducer: seasonReducer } = seasonSlice;
