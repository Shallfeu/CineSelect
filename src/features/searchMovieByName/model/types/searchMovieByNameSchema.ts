import { Movie } from 'entities/Movie';

export interface SearchMovieByNameSchema {
    search: string;
    isLoading: boolean;
    error?: string;
    searchResults?: Movie[];
}