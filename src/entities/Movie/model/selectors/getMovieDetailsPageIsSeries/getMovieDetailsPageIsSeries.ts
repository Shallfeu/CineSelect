import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieDetailsPageIsSeries = (state: StateSchema) => state.movieDetails?.data?.isSeries ;
