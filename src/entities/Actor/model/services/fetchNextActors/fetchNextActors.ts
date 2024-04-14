import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { actorActions } from '../../slice/actorSlice';
import { fetchActors } from '../fetchActors/fetchActors';
import { getActorPage } from '../../selectors/getActorPage/getActorPage';
import { getActorIsLoading } from '../../selectors/getActorIsLoading/getActorIsLoading';
import { getActorHasMore } from '../../selectors/getActorHasMore/getActorHasMore';


interface FetchNextActorsProps {
    movieId: string;
    replace?: boolean;
}
export const fetchNextActors = createAsyncThunk<
    void,
    FetchNextActorsProps,
    ThunkConfig<string>
>(
    'actor/fetchNextActors',
    async (args, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const hasMore = getActorHasMore(getState());
        const page = getActorPage(getState());
        const isLoading = getActorIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(actorActions.setPage(page + 1));
            dispatch(fetchActors(args));
        }
    },
);
