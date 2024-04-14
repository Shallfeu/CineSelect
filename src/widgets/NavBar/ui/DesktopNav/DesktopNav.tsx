import {  Stack } from '@chakra-ui/react';
import React from 'react';
import { NavItem } from 'widgets/NavBar/model/types';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface DesktopNavProps {
    navigationOptions: NavItem[];
}

export const DesktopNav = (props: DesktopNavProps) => {
    const { navigationOptions } = props;

    return (
        <Stack direction={'row'} spacing={4}>
            {navigationOptions.map(({ title, href, key }) => (
                <AppLink key={key} to={href}>
                    {title}
                </AppLink>
            ))}
        </Stack>
    );
};