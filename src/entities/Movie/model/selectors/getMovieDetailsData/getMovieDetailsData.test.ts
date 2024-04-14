import { StateSchema } from 'app/providers/StoreProvider';
import { getMovieDetailsData } from './getMovieDetailsData';
import { data } from './movieDetailsTestData';

describe('getMovieDetailsData', () => {
    test('should return data', () => {
        // @ts-expect-error TS2322
        const state: DeepPartial<StateSchema> = { movieDetails: { data } };
        expect(getMovieDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieDetailsData(state as StateSchema)).toEqual(undefined);
    });
});