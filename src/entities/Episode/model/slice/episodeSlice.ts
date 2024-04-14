import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodeSchema } from '../types/episodeSchema';
import {
    fetchEpisodesBySeasonId,
} from '../services/fetchEpisodesBySeasonId/fetchEpisodesBySeasonId';
import { Episode } from '../types/episode';
import { StateSchema } from 'app/providers/StoreProvider';

const initialState: EpisodeSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    isInitialized: false,
};

// @ts-expect-error TS2344
const episodesAdapter = createEntityAdapter<Episode>({
    selectId: (episode: Episode) => episode.number,
});

export const getEpisodes = episodesAdapter.getSelectors<StateSchema>(
    (state) => state.episode || episodesAdapter.getInitialState(),
);

export const episodeSlice = createSlice({
    name: 'episode',
    initialState: episodesAdapter.getInitialState<EpisodeSchema>(initialState),
    reducers: {
        clearState(state) {
            episodesAdapter.removeAll(state);
        },
        setIsInitialized(state, action: PayloadAction<boolean>) {
            state.isInitialized = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodesBySeasonId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEpisodesBySeasonId.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                const { docs } = action.payload;
                const season = docs[0];

                if (season) {
                    episodesAdapter.setAll(state, season.episodes);
                }
            })
            .addCase(fetchEpisodesBySeasonId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: episodeActions } = episodeSlice;
export const { reducer: episodeReducer } = episodeSlice;
