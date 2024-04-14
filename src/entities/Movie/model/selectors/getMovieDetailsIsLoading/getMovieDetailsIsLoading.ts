import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieDetailsIsLoading = (state: StateSchema) => state.movieDetails?.isLoading;
