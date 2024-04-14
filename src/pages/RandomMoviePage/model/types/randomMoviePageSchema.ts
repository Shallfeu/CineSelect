import { Movie } from 'entities/Movie';

export interface RandomMoviePageSchema {
    isLoading: boolean;
    error?: string;
    data?: Movie;

    // filters
    defaultYear: number[];
    isSeries: boolean;
    rating: number;
    year?: number[];
    genres?: string[];
    countries?: string[];
    studios?: string[];
}