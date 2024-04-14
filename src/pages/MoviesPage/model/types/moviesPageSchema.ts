import { EntityState } from '@reduxjs/toolkit';
import { Movie } from 'entities/Movie';

export interface MoviesPageSchema extends EntityState<Movie, number> {
    isLoading: boolean;
    error?: string;

    // pagination
    pages: number;
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    defaultYear: number[];
    defaultAge: number[];

    year?: number[];
    countries?: string[];
    ageRating?: number[];

    _inited: boolean;
}