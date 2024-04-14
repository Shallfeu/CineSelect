import { StateSchema } from 'app/providers/StoreProvider';

export const getRandomMoviePageIsLoading = (state: StateSchema) => state.randomMovie?.isLoading ?? false;
