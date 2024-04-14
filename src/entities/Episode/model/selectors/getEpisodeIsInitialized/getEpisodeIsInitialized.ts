import { StateSchema } from 'app/providers/StoreProvider';

export const getEpisodeIsInitialized = (state: StateSchema) => state.episode?.isInitialized;