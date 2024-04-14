import { MultiSelect, MultiSelectItem } from 'shared/ui/MultiSelect/MultiSelect';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from '@chakra-ui/react';
import { getFormattedStudios } from '../../model/selectors/getFormattedStuidos/getFormattedStudios';
import { getStudioIsLoading } from '../../model/selectors/getStudioIsLoading/getStudioIsLoading';
import { getStudioError } from '../../model/selectors/getStudioError/getStudioError';
import { fetchStudios } from '../../model/services/fetchStudios/fetchStudios';
import { getStudioData } from 'entities/Studio/model/selectors/getStudioData/getStudioData';
import { useEffect, useState } from 'react';

interface GenreSelectProps {
    className?: string;
    value: MultiSelectItem[];
    onChange: (value: MultiSelectItem[]) => void;
}

export const StudioSelect = (props: GenreSelectProps) => {
    const [formattedStudios, setFormattedStudios] = useState<MultiSelectItem[]>();
    const { className, value, onChange } = props;

    const dispatch = useAppDispatch();

    const studios = useSelector(getStudioData);
    const isLoading = useSelector(getStudioIsLoading);
    const error = useSelector(getStudioError);

    useEffect(() => {
        if (studios) {
            setFormattedStudios(studios.map(({ name }) => ({ label: name, value: name })));
        }
    }, [studios]);

    useEffect(() => {
        dispatch(fetchStudios());
    }, []);

    if (isLoading) {
        return (<Skeleton w="full" height="50px" />);
    }

    if (error) {
        return (<>{error}</>);
    }

    return (
        <MultiSelect
            className={className}
            options={formattedStudios ?? []}
            value={value}
            onChange={onChange}
        />
    );
};