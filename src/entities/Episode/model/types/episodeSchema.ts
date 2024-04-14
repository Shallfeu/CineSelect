import { Episode } from './episode';
import { EntityState } from '@reduxjs/toolkit';

export interface EpisodeSchema extends EntityState<Episode, number> {
    isLoading: boolean;
    error?: string;
    isInitialized: boolean;
}