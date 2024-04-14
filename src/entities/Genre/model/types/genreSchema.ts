import { Genre } from './genre';

export  interface GenreSchema {
    isLoading: boolean;
    error?: string;
    data?: Genre[];
}
