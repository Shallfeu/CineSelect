import { NavItem } from 'widgets/NavBar/model/types';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export const MobileNavItem = ({ title, href }: NavItem) => {
    return (
        <Stack spacing={4}>
            <AppLink to={href}>
                {title}
            </AppLink>
        </Stack>
    );
};