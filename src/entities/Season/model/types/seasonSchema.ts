import { Season } from './season';
import { EntityState } from '@reduxjs/toolkit';

export  interface SeasonSchema extends EntityState<Season, string> {
    isLoading: boolean;
    error?: string;
    page: number;
    limit: number;
    hasMore: boolean;
}

