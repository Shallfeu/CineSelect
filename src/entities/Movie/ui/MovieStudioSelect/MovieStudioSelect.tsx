import { MultiSelectItem } from 'shared/ui/MultiSelect/MultiSelect';
import { useEffect, useState } from 'react';
import cls from './MovieStudioSelect.module.scss';
import { Badge, Text } from '@chakra-ui/react';
import { StudioSelect } from 'entities/Studio';

interface MovieStudioSelectProps {
    studios: string[];
    onChangeStudios: (value: string[]) => void;
}

export const MovieStudioSelect = (props: MovieStudioSelectProps) => {
    const { studios, onChangeStudios } = props;
    const [selectedStudios, setSelectedStudios] = useState<MultiSelectItem[]>([]);

    useEffect(() => {
        const formattedStudios = studios.map(genre => {
            return { label: genre, value: genre };
        });
        setSelectedStudios(formattedStudios);
    }, [studios]);

    const selectHandler = (value: MultiSelectItem[]) => {
        const formattedStudios = value.map(el => el.value);
        onChangeStudios(formattedStudios);
    };

    return (
        <div className={cls.wrapper}>
            <Badge colorScheme="blue">
                <Text fontSize={{ lg: 'lg', base: 'md' }}>
                    Студии
                </Text>
            </Badge>

            <StudioSelect
                className={cls.select}
                value={selectedStudios}
                onChange={selectHandler}
            />
        </div>
    );
};