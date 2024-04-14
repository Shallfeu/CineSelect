import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup, InputProps,
    InputRightElement,
    useDisclosure,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface PasswordFieldProps extends InputProps {
    label?: string;
}

export const PasswordField = (props: PasswordFieldProps) => {
    const { label } = props;

    const { isOpen, onToggle } = useDisclosure();
    const clickRevealHandler = () => {
        onToggle();
    };

    return (
        <FormControl>
            <FormLabel htmlFor="password">{label}</FormLabel>

            <InputGroup>
                <InputRightElement>
                    <IconButton
                        variant="text"
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={clickRevealHandler}
                    />
                </InputRightElement>

                <Input
                    id="password"
                    name="password"
                    type={isOpen ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    {...props}
                />
            </InputGroup>
        </FormControl>
    );
};
