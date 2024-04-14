import {
    Avatar,
    Button,
    Center,
    Flex,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack, useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/authByUsername';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const AuthButton = () => {
    const authData = useSelector(getUserAuthData);

    const dispatch = useAppDispatch();

    const { colorMode, toggleColorMode } = useColorMode();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const showModalHandler = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const closeModalHandler = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const logoutHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return (
            <>
                <Button
                    fontSize="sm"
                    fontWeight={600}
                    variant="solid"
                    colorScheme="yellow"
                    onClick={showModalHandler}
                >
                    Войти
                </Button>

                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={closeModalHandler}
                    />
                )}
            </>
        );
    }

    return (
        <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} zIndex={1000}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}
                    >
                        <Avatar
                            size={'sm'}
                            src={authData.avatar}
                        />
                    </MenuButton>

                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'2xl'}
                                src={authData.avatar}
                            />
                        </Center>
                        <br />
                        <Center>
                            <p>{authData.username}</p>
                        </Center>
                        <br />

                        <MenuDivider />

                        <MenuItem
                            onClick={logoutHandler}
                        >
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Stack>
        </Flex>
    );
};
