import { UserRole } from 'entities/User';

export interface NavItem {
    key: string;
    href: string;
    title: string;
    authOnly?: boolean;
    roles?: UserRole[]
}