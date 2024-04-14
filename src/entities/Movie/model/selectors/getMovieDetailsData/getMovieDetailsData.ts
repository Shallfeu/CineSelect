import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieDetailsData = (state: StateSchema) => state.movieDetails?.data;
