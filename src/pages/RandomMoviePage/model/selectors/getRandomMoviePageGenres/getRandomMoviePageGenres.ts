import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageGenres = (state: StateSchema) => state.randomMovie?.genres ?? null;
