import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RandomMoviePage } from 'pages/RandomMoviePage';
import { AdminPage } from 'pages/AdminPage';
import { UserRole } from 'entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

export enum AppRoutes {
    MAIN = 'main',
    MOVIE_DETAILS = 'movie_details',
    MOVIES = 'movies',
    RANDOM_MOVIE = 'random_movie',
    ADMIN = 'admin',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.MOVIES]: '/movies',
    [AppRoutes.MOVIE_DETAILS]: '/movies/',
    [AppRoutes.RANDOM_MOVIE]: '/random_movie',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.MOVIES]: {
        path: RoutePath.movies,
        element: <MoviesPage />,
    },
    [AppRoutes.MOVIE_DETAILS]: {
        path: `${RoutePath.movie_details}:id`,
        element: <MovieDetailsPage />,
    },
    [AppRoutes.RANDOM_MOVIE]: {
        path: RoutePath.random_movie,
        element: <RandomMoviePage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPage />,
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
