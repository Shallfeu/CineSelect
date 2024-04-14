import { Actor } from './actor';
import { EntityState } from '@reduxjs/toolkit';

export  interface ActorSchema extends EntityState<Actor, number> {
    isLoading: boolean;
    error?: string;
    limit: number;
    page: number;
    hasMore: boolean;
}

