import {
    RangeSlider as ChakraRangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
} from '@chakra-ui/react';
import { compareTwoArrays } from 'shared/lib/helpers/compareTwoArrays/compareTwoArrays';

interface RangeSliderProps{
    value: number[];
    defaultValue: number[]
    onChange: (value: number[]) => void;
    onChanged: (value: number[]) => void;
}

export const RangeSlider = (props: RangeSliderProps) => {
    const { value, defaultValue, onChange, onChanged } = props;

    const changeRangeSelectHandler = (e: number[]) => {
        if(!compareTwoArrays(value, e)) {
            onChange(e)
        }
    }

    return (
        <ChakraRangeSlider
            onChange={changeRangeSelectHandler}
            onChangeEnd={onChanged}
            value={value}
            min={defaultValue[0]}
            max={defaultValue[1]}
            step={1}
        >
            <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack bg="tomato" />
            </RangeSliderTrack>

            <RangeSliderThumb color="goldenrod" p="16px" w="fit-content" index={0}>
                {value[0]}
            </RangeSliderThumb>

            <RangeSliderThumb color="goldenrod" p="16px" w="fit-content" index={1}>
                {value[1]}
            </RangeSliderThumb>
        </ChakraRangeSlider>
    );
};