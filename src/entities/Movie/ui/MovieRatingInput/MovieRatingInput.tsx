import cls from './MovieRatingInput.module.scss';
import {
    Badge, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
} from '@chakra-ui/react';

interface MovieRatingInputProps {
    value: number;
    onChangeHandler: (value: number) => void;
}

export const MovieRatingInput = (props: MovieRatingInputProps) => {
    const { value, onChangeHandler } = props;

    const changeHandler = (_: string, valueAsNumber: number) => {
        onChangeHandler(valueAsNumber)
    }

    return (
        <div className={cls.wrapper}>
            <Badge colorScheme="yellow">
                <Text fontSize={{ lg: 'lg', base: 'md' }}>
                    Рейтинг от
                </Text>
            </Badge>

            <NumberInput
                value={value}
                onChange={changeHandler}
                step={0.1}
                defaultValue={5}
                min={1}
                max={9}
            >
                <NumberInputField />

                <NumberInputStepper>
                    <NumberIncrementStepper />

                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </div>
    );
};