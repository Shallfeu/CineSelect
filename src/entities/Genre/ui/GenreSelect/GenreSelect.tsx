import { MultiSelect, MultiSelectItem } from 'shared/ui/MultiSelect/MultiSelect';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getGenreIsLoading } from '../../model/selectors/getGenreIsLoading/getGenreIsLoading';
import { getGenreError } from '../../model/selectors/getGenreError/getGenreError';
import { fetchGenres } from '../../model/services/fetchGenres/fetchGenres';
import { getFormattedGenres } from '../../model/selectors/getFormattedGenres/getFormattedGenres';
import { Skeleton } from '@chakra-ui/react';
import { getGenreData } from 'entities/Genre/model/selectors/getGenreData/getGenreData';
import { useEffect, useState } from 'react';

interface GenreSelectProps {
    className?: string;
    value: MultiSelectItem[];
    onChange: (value: MultiSelectItem[]) => void;
}

export const GenreSelect = (props: GenreSelectProps) => {
    const [formattedGenres, setFormattedGenres] = useState<MultiSelectItem[]>()
    const { className, value, onChange } = props;

    const dispatch = useAppDispatch();

    const genres = useSelector(getGenreData);
    const isLoading = useSelector(getGenreIsLoading);
    const error = useSelector(getGenreError);

    useEffect(() => {
        if(genres) {
            setFormattedGenres(genres.map(({ name }) => ({ label: name, value: name })))
        }
    }, [genres]);

    useInitialEffect(() => {
        dispatch(fetchGenres());
    });

    if(isLoading) {
        return (<Skeleton w='full' height="50px" />)
    }

    if(error) {
        return (<>{error}</>)
    }

    return (
        <MultiSelect
            className={className}
            options={formattedGenres ?? []}
            value={value}
            onChange={onChange}
        />
    );
};