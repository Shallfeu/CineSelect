import { StateSchema } from 'app/providers/StoreProvider';

export const getEpisodeError = (state: StateSchema) => state.episode?.error;