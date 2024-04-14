import { StateSchema } from 'app/providers/StoreProvider';
import { getMovieDetailsIsLoading } from './getMovieDetailsIsLoading';

describe('getMovieDetailsIsLoading', () => {
    test('should return data', () => {
        const isLoading = false;
        const state: DeepPartial<StateSchema> = { movieDetails: { isLoading } };
        expect(getMovieDetailsIsLoading(state as StateSchema)).toEqual(isLoading);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});