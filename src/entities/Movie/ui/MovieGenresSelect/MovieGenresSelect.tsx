import { MultiSelectItem } from 'shared/ui/MultiSelect/MultiSelect';
import { useEffect, useState } from 'react';
import cls from './MovieGenresSelect.module.scss';
import { Badge, Text } from '@chakra-ui/react';
import { GenreSelect } from 'entities/Genre';

interface MovieGenresSelectProps {
    genres: string[];
    onChangeGenres: (value: string[]) => void;
}

export const MovieGenresSelect = (props: MovieGenresSelectProps) => {
    const { genres,  onChangeGenres } = props;
    const [selectedGenres, setSelectedGenres] = useState<MultiSelectItem[]>([]);

    useEffect(() => {
        const formattedGenres = genres.map(genre => {
            return { label: genre, value: genre };
        });
        setSelectedGenres(formattedGenres);
    }, [genres]);

    const selectHandler = (value: MultiSelectItem[]) => {
        const formattedGenres = value.map(el => el.value);
        onChangeGenres(formattedGenres);
    };

    return (
        <div className={cls.wrapper}>
            <Badge color="teal">
                <Text fontSize={{ lg: 'lg', base: "md" }}>
                    Жанры
                </Text>
            </Badge>

            <GenreSelect
                className={cls.select}
                value={selectedGenres}
                onChange={selectHandler}
            />
        </div>
    );
};