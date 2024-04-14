import { Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { MobileNavItem } from 'widgets/NavBar/ui/MobileNav/MobileNavItem';
import { NavItem } from 'widgets/NavBar/model/types';

interface MobileNavProps {
    navigationOptions: NavItem[];
}

export const MobileNav = (props: MobileNavProps) => {
    const { navigationOptions } = props;

    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {navigationOptions.map(({ key, href, title }) => (
                <MobileNavItem key={key} href={href} title={title} />
            ))}
        </Stack>
    );
};