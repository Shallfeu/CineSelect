import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieRecommendations = (state: StateSchema) => state.movieDetails?.data?.similarMovies ?? [];
