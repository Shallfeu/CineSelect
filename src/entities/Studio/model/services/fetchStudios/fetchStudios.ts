import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Studio } from '../../types/studio';
import { DEFAULT_STUDIOS } from 'shared/const/movieConsts';

export const fetchStudios = createAsyncThunk<
    Studio[],
    void,
    ThunkConfig<string>
>(
    'studio/fetchStudios',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            // I didn't find endpoint for fetching studios (networks)
            // so I make it to imitate api call for studio data
            const response = await new Promise<{data: Studio[]}>((res) => {
                setTimeout(() => res({ data: DEFAULT_STUDIOS }), 1000)
            })

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
