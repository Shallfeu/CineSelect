import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchMoviesNextPage } from './fetchMoviesNextPage';
import { fetchMovies } from '../fetchMovies/fetchMovies';

jest.mock('../fetchMovies/fetchMovies');

describe('fetchMoviesNextPage', () => {
    test('fetchMoviesNextPage success', async () => {
        const thunk = new TestAsyncThunk(fetchMoviesNextPage, {
            moviesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(fetchMovies).toHaveBeenCalled();
    });
    test('fetchMoviesNextPage not called', async () => {
        const thunk = new TestAsyncThunk(fetchMoviesNextPage, {
            moviesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchMovies).not.toHaveBeenCalled();
    });
});
