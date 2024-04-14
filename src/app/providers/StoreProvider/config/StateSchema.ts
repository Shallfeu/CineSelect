import { AxiosInstance } from 'axios';
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { ActorSchema } from 'entities/Actor';
import { PosterSchema } from 'entities/Poster';
import { ReviewSchema } from 'entities/Review';
import { SeasonSchema } from 'entities/Season';
import { EpisodeSchema } from 'entities/Episode';
import { LoginSchema } from 'features/authByUsername';
import { MoviesPageSchema } from 'pages/MoviesPage';
import { MovieDetailsSchema } from 'entities/Movie/model/types/movieDetails';
import { SearchMovieByNameSchema } from 'features/searchMovieByName';
import { RandomMoviePageSchema } from 'pages/RandomMoviePage';
import { GenreSchema } from 'entities/Genre';
import { CountrySchema } from 'entities/Country';
import { StudioSchema } from 'entities/Studio';

export interface StateSchema {
    user: UserSchema,
    searchMovie: SearchMovieByNameSchema,

    // Async Reducers
    actor?: ActorSchema,
    poster?: PosterSchema,
    review?: ReviewSchema,
    season?: SeasonSchema,
    episode?: EpisodeSchema,
    genre?: GenreSchema,
    country?: CountrySchema,
    studio?: StudioSchema,

    loginForm?: LoginSchema,
    moviesPage?: MoviesPageSchema,
    movieDetails?: MovieDetailsSchema,
    randomMovie?: RandomMoviePageSchema,
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: Action) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - mounted, false - unmounted
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
