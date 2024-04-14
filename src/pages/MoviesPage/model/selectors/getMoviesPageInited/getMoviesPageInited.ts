import { StateSchema } from 'app/providers/StoreProvider';

export const getMoviesPageInited = (state: StateSchema) => state.moviesPage?._inited;
