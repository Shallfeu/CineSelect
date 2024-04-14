import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { NavItem } from 'widgets/NavBar/model/types';
import { UserRole } from 'entities/User';

export const headerLinks: NavItem[] = [
    {
        key: 'Home',
        href: RoutePath.main,
        title: 'Домой',
    },
    {
        key: 'Movies',
        href: RoutePath.movies,
        title: 'Фильмы',
    },
    {
        key: 'Random',
        href: RoutePath.random_movie,
        title: 'Случайный фильм',
        authOnly: true,
    },
    {
        key: 'Admin',
        href: RoutePath.admin,
        title: 'Админка',
        authOnly: true,
        roles: [UserRole.ADMIN]
    },
];