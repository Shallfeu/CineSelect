import { Poster } from './poster';

export  interface PosterSchema {
    isLoading: boolean;
    error?: string;
    data?: Poster[];
    limit: number;
}

