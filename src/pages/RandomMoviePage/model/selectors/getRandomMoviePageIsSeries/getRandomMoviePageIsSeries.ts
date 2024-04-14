import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageIsSeries = (state: StateSchema) => state.randomMovie?.isSeries ?? false;
