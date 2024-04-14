import { StateSchema } from 'app/providers/StoreProvider';
import { DEFAULT_YEAR } from 'shared/const/movieConsts';

export const getRandomMoviePageDefaultYear = (state: StateSchema) => state.randomMovie?.defaultYear ?? DEFAULT_YEAR;
