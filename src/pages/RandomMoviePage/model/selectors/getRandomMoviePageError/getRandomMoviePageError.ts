import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageError = (state: StateSchema) => state.randomMovie?.error;
