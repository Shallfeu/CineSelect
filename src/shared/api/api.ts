import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorageConsts';
import axiosRetry from 'axios-retry';
export const $api = axios.create({
    baseURL: __API__,
});

axiosRetry($api, { retries: 3 });
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers['X-API-KEY'] = __API_KEY__;
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});


