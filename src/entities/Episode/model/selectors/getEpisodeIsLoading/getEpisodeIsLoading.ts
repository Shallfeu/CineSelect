import { StateSchema } from 'app/providers/StoreProvider';

export const getEpisodeIsLoading = (state: StateSchema) => state.episode?.isLoading;