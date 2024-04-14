import { StateSchema } from 'app/providers/StoreProvider';
import { getMovieRecommendations } from './getMovieRecommendations';
import { data } from '../getMovieDetailsData/movieDetailsTestData';

describe('getMovieRecommendations', () => {
    test('should return data', () => {
        const similarMovies = [data];
        // @ts-expect-error TS2322
        const state: DeepPartial<StateSchema> = { movieDetails: { data: { similarMovies } } };
        expect(getMovieRecommendations(state as StateSchema)).toEqual([data]);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieRecommendations(state as StateSchema)).toEqual([]);
    });
});