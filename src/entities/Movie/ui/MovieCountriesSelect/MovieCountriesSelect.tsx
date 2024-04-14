import { MultiSelectItem } from 'shared/ui/MultiSelect/MultiSelect';
import { useEffect, useState } from 'react';
import cls from './MovieCountriesSelect.module.scss';
import { Badge, Text } from '@chakra-ui/react';
import { CountrySelect } from 'entities/Country';

interface MovieCountriesSelectProps {
    countries: string[];
    onChangeCountries: (value: string[]) => void;
}

export const MovieCountriesSelect = (props: MovieCountriesSelectProps) => {
    const { countries, onChangeCountries } = props;
    const [selectedCountries, setSelectedCountries] = useState<MultiSelectItem[]>([]);

    useEffect(() => {
        const formattedCountries = countries.map(country => {
            return { label: country, value: country };
        });
        setSelectedCountries(formattedCountries);
    }, [countries]);

    const selectHandler = (value: MultiSelectItem[]) => {
        const formattedCountries = value.map(el => el.value);
        onChangeCountries(formattedCountries);
    };

    return (
        <div className={cls.wrapper}>
            <Badge colorScheme="orange">
                <Text fontSize={{ lg: 'lg', base: 'md' }}>
                    Страна
                </Text>
            </Badge>

            <CountrySelect
                className={cls.select}
                value={selectedCountries}
                onChange={selectHandler}
            />
        </div>
    );
};