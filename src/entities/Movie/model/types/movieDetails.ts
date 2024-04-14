import { Movie } from './movie';

export interface MovieDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Movie;
}
