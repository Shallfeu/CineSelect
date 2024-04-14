import { RangeSlider } from 'shared/ui/RangeSlider/RangeSlider';
import { Badge, Text } from '@chakra-ui/react';
import cls from './MovieYearSlider.module.scss'

interface MovieYearSliderProps {
    year: number[];
    onChangeYear: (value: number[]) => void;
    defaultYear: number[];
    onChangedYear?: () => void;
}

export const MovieYearSlider = (props: MovieYearSliderProps) => {
    const {
        year,
        defaultYear,
        onChangeYear,
        onChangedYear,
    } = props;

    const changeSliderHandler = (value: number[]) => {
        onChangeYear(value);
    };

    const changedSliderHandler = () => {
        if(onChangedYear) {
            onChangedYear();
        }
    };

    return (
        <div className={cls.wrapper}>
            <Badge colorScheme="purple">
                <Text fontSize='lg'>
                    Год
                </Text>
            </Badge>

            <RangeSlider
                value={year}
                defaultValue={defaultYear}
                onChange={changeSliderHandler}
                onChanged={changedSliderHandler}
            />
        </div>
    );
};