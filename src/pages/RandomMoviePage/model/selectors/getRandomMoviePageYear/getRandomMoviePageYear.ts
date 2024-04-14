import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageYear = (state: StateSchema) => state.randomMovie?.year ?? null;
