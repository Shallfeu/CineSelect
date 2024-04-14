import { useCallback } from 'react';
import { Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { PasswordField } from 'shared/ui/PasswordField/PasswordField';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = (props: LoginFormProps) => {
    const { onSuccess } = props;
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const changeUsernameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const changePasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const loginHandler = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <Stack p="16px" spacing="6">
                <Stack spacing="5">
                    <Heading w="full" textAlign="center" size="md">Форма авторизации</Heading>

                    <div>{error}</div>

                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>

                        <Input
                            id="email"
                            type="email"
                            value={username}
                            onChange={(e) => changeUsernameHandler(e.target.value)}
                        />
                    </FormControl>

                    <PasswordField
                        label="Пароль"
                        value={password}
                        onChange={(e) => changePasswordHandler(e.target.value)}
                    />
                </Stack>

                <Button
                    colorScheme="yellow"
                    variant="outline"
                    onClick={loginHandler}
                    disabled={isLoading}
                >
                    Sign in
                </Button>
            </Stack>
        </DynamicModuleLoader>
    );
};

export default LoginForm;