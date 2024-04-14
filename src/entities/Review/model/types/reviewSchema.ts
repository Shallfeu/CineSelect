import { Review } from './review';
import { EntityState } from '@reduxjs/toolkit';

export  interface ReviewSchema extends EntityState<Review, number>{
    isLoading: boolean;
    error?: string;
    data?: Review[];
    page: number;
    limit: number;
    hasMore: boolean;
}

