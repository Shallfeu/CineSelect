import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageData = (state: StateSchema) => state.randomMovie?.data;
