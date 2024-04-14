import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieDetailsError = (state: StateSchema) => state.movieDetails?.error;
