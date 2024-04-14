import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageStudios = (state: StateSchema) => state.randomMovie?.studios ?? null;
