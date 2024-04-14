import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface InputProps extends ChakraInputProps {
    onChangeValue: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {
        onChangeValue,
        ...otherProps
    } = props;

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.value);
    };

    return (
        <ChakraInput
            onChange={changeHandler}
            {...otherProps}
        />
    );
};