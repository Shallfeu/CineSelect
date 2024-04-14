import { StateSchema } from 'app/providers/StoreProvider';
import { getMovieDetailsError } from './getMovieDetailsError';

describe('getMovieDetailsError', () => {
    test('should return data', () => {
        const error = 'some error'
        const state: DeepPartial<StateSchema> = { movieDetails: { error } };
        expect(getMovieDetailsError(state as StateSchema)).toEqual(error);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieDetailsError(state as StateSchema)).toEqual(undefined);
    });
});