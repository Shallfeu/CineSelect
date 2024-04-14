import { StateSchema } from 'app/providers/StoreProvider';
import { getMovieDetailsPageIsSeries } from './getMovieDetailsPageIsSeries';

describe('getMovieDetailsPageIsSeries', () => {
    test('should return data', () => {
        const isSeries = false;
        const state: DeepPartial<StateSchema> = { movieDetails: { data: { isSeries } } };
        expect(getMovieDetailsPageIsSeries(state as StateSchema)).toEqual(isSeries);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieDetailsPageIsSeries(state as StateSchema)).toEqual(undefined);
    });
});