import { StateSchema } from 'app/providers/StoreProvider';
import { DEFAULT_YEAR } from 'shared/const/movieConsts';

export const getMoviesPageDefaultYear = (state: StateSchema) => state.moviesPage?.defaultYear ?? DEFAULT_YEAR;
