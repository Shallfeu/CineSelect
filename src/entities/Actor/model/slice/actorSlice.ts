import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActorSchema } from 'entities/Actor/model/types/actorSchema';
import { fetchActors } from 'entities/Actor/model/services/fetchActors/fetchActors';
import { Actor } from 'entities/Actor/model/types/actor';
import { StateSchema } from 'app/providers/StoreProvider';

const initialState: ActorSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    limit: 10,
    hasMore: true,
};

const actorsAdapter = createEntityAdapter<Actor>();

export const getActors = actorsAdapter.getSelectors<StateSchema>(
    (state) => state.actor || actorsAdapter.getInitialState(),
);

export const actorSlice = createSlice({
    name: 'actor',
    initialState: actorsAdapter.getInitialState<ActorSchema>(initialState),
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        clearState(state) {
            actorsAdapter.removeAll(state)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActors.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    actorsAdapter.removeAll(state);
                }
            })
            .addCase(fetchActors.fulfilled, (
                state,
                action,
            ) => {
                const { docs, page, pages } = action.payload;
                state.isLoading = false;
                state.hasMore = page < pages;

                if (action.meta.arg.replace) {
                    actorsAdapter.setAll(state, docs);
                } else {
                    actorsAdapter.addMany(state, docs);
                }
            })
            .addCase(fetchActors.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: actorActions } = actorSlice;
export const { reducer: actorReducer } = actorSlice;
