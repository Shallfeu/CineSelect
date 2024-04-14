import { Select as ChakraSelect, SelectFieldProps } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

export interface SelectItem {
    value: string | number;
    title: string | number;
}

interface SelectProps extends SelectFieldProps{
    options: SelectItem[];
    value: string | number;
    onChangeHandler: (value: string | number) => void;
}

export const Select = (props: SelectProps) => {
    const {
        options,
        value,
        onChangeHandler,
        ...rest
    } = props;

    const changeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChangeHandler(e.target.value)
    }

    return (
        <ChakraSelect
            value={value}
            onChange={changeHandler}
            {...rest}
        >
            {options.map(({ value, title }) => (
                <option key={value} value={value}>
                    {title}
                </option>
            ))}
        </ChakraSelect>
    );
};