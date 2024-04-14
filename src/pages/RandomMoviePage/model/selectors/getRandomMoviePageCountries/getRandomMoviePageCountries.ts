import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageCountries = (state: StateSchema) => state.randomMovie?.countries ?? null;
