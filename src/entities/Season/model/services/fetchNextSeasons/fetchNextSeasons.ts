import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getSeasonHasMore } from '../../selectors/getSeasonHasMore/getSeasonHasMore';
import { getSeasonPage } from '../../selectors/getSeasonPage/getSeasonPage';
import { getSeasonIsLoading } from '../../selectors/getSeasonIsLoading/getSeasonIsLoading';
import { seasonActions } from '../../slice/seasonSlice';
import { fetchSeasons } from '../../services/fetchSeasons/fetchSeasons';

interface FetchNextSeasonsProps {
    movieId: string;
    replace?: boolean;
}
export const fetchNextSeasons = createAsyncThunk<
    void,
    FetchNextSeasonsProps,
    ThunkConfig<string>
>(
    'season/fetchNextSeasons',
    async (args, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const hasMore = getSeasonHasMore(getState());
        const page = getSeasonPage(getState());
        const isLoading = getSeasonIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(seasonActions.setPage(page + 1));
            dispatch(fetchSeasons(args));
        }
    },
);
