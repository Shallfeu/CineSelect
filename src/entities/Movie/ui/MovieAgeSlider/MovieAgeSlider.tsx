import { RangeSlider } from 'shared/ui/RangeSlider/RangeSlider';
import cls from './MovieAgeSlider.module.scss';
import { Badge, Text } from '@chakra-ui/react';

interface MovieAgeSliderProps {
    age: number[];
    onChangeAge: (value: number[]) => void;
    defaultAge: number[];
    onChangedAge: () => void;
}

export const MovieAgeSlider = (props: MovieAgeSliderProps) => {
    const {
        age,
        onChangeAge,
        defaultAge,
        onChangedAge,
    } = props;

    const changeSliderHandler = (value: number[]) => {
        onChangeAge(value);
    };

    const changedSliderHandler = () => {
        onChangedAge();
    };

    return (
        <div className={cls.wrapper}>
            <Badge colorScheme="blue">
                <Text fontSize='lg'>
                    Возраст
                </Text>
            </Badge>

            <RangeSlider
                value={age}
                defaultValue={defaultAge}
                onChange={changeSliderHandler}
                onChanged={changedSliderHandler}
            />
        </div>
    );
};