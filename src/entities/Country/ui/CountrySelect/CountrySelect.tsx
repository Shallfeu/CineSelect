import { MultiSelect, MultiSelectItem } from 'shared/ui/MultiSelect/MultiSelect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from '@chakra-ui/react';
import { getCountryError } from '../../model/selectors/getCountryError/getCountryError';
import { getFormattedCountry } from '../../model/selectors/getFormattedCountry/getFormattedCountry';
import { fetchCountries } from '../../model/services/fetchCountries/fetchCountries';
import { getCountryIsLoading } from '../../model/selectors/getCountryIsLoading/getCountryIsLoading';
import { useEffect, useState } from 'react';
import { getCountryData } from 'entities/Country/model/selectors/getCountryData/getCountryData';

interface CountrySelectProps {
    className?: string;
    value: MultiSelectItem[];
    onChange: (value: MultiSelectItem[]) => void;
}

export const CountrySelect = (props: CountrySelectProps) => {
    const [formattedCountries, setFormattedCountries] = useState<MultiSelectItem[]>();
    const { className, value, onChange } = props;

    const dispatch = useAppDispatch();

    const countries = useSelector(getCountryData);
    const isLoading = useSelector(getCountryIsLoading);
    const error = useSelector(getCountryError);

    useEffect(() => {
        if (countries) {
            setFormattedCountries(countries.map(({ name }) => ({ label: name, value: name })));
        }
    }, [countries]);

    useEffect(() => {
        dispatch(fetchCountries());
        // eslint-disable-next-line
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
            options={formattedCountries ?? []}
            value={value}
            onChange={onChange}
        />
    );
};