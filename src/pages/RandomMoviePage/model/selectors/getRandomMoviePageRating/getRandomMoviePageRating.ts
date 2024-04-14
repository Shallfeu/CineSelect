import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageRating = (state: StateSchema) => state.randomMovie?.rating ?? 5;
