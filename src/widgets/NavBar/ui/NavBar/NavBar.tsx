import React, { useMemo } from 'react';
import {
    Box,
    Flex,
    IconButton,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon
} from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { MobileNav } from '../MobileNav/MobileNav';
import { DesktopNav } from '../DesktopNav/DesktopNav';
import { headerLinks } from '../../model/headerLinks';
import { getUserAuthData, getUserRoles } from 'entities/User';
import { Logo } from 'shared/ui/Logo/Logo';
import { AuthButton } from '../AuthButton/AuthButton';
import { SearchInput } from 'features/searchMovieByName';

export const NavBar = () => {
    const authData = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const { isOpen, onToggle } = useDisclosure();

    const navigationOptions = useMemo(() => headerLinks.filter(option => {
        const neededAuth = option?.authOnly;
        const roles = option.roles;

        const isAuth = neededAuth ? !!authData : true;
        const hasRequiredRole = roles ? roles.some((requiredRole) => {
            return userRoles?.includes(requiredRole);
        }) : true;

        return isAuth && hasRequiredRole;
    }), [authData, userRoles]);

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align="center"
            >
                <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Logo />

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav navigationOptions={navigationOptions} />
                    </Flex>
                </Flex>

                <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={1}>
                    <SearchInput />

                    <AuthButton />
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav navigationOptions={navigationOptions} />
            </Collapse>
        </Box>
    );
};






