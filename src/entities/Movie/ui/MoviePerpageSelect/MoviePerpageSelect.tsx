import { Select } from 'shared/ui/Select/Select';
import cls from './MoviePerpageSelect.module.scss';
import { Badge, Text } from '@chakra-ui/react';

interface MoviePerpageSelectProps {
    perpage: number;
    onChangePerpage: (value: number) => void;
}

const perpageOptions = [
    { title: 10, value: 10 },
    { title: 50, value: 50 },
    { title: 100, value: 100 },
];

export const MoviePerpageSelect = (props: MoviePerpageSelectProps) => {
    const { perpage, onChangePerpage } = props;

    const selectHandler = (value: string | number) => {
        onChangePerpage(typeof value === 'number' ? value : parseInt(value));
    };

    return (
        <div className={cls.wrapper}>
            <Badge color="green">
                <Text fontSize="lg">
                    Эл-тов на странице
                </Text>
            </Badge>

            <Select
                maxW="80px"
                options={perpageOptions}
                onChangeHandler={selectHandler}
                value={perpage}
            />
        </div>
    );
};