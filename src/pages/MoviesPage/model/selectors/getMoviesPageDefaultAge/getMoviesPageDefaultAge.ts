import { StateSchema } from 'app/providers/StoreProvider';
import { DEFAULT_AGE } from 'shared/const/movieConsts';

export const getMoviesPageDefaultAge = (state: StateSchema) => state.moviesPage?.defaultAge  ?? DEFAULT_AGE;
