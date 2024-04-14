import { Badge, FormControl, FormLabel, Switch, Text } from '@chakra-ui/react';
import cls from './MovieIsSeriesCheckbox.module.scss';

interface MovieIsSeriesCheckboxProps {
    value: boolean;
    onChangeHandler: (value: boolean) => void;
}

export const MovieIsSeriesCheckbox = (props: MovieIsSeriesCheckboxProps) => {
    const { value, onChangeHandler } = props;

    const changeHandler = () => {
        onChangeHandler(!value);
    };

    return (
        <div className={cls.wrapper}>
            <FormControl display="flex" alignItems="center" gap="8px">
                <FormLabel htmlFor="switcher" mb="0">
                    <Badge colorScheme="green">
                        <Text fontSize={{ lg: 'lg', base: 'md' }}>
                            Фильм
                        </Text>
                    </Badge>
                </FormLabel>

                <Switch id="switcher" isChecked={value} onChange={changeHandler} />

                <FormLabel htmlFor="switcher" mb="0">
                    <Badge colorScheme="red">
                        <Text fontSize={{ lg: 'lg', base: 'md' }}>
                            Сериал
                        </Text>
                    </Badge>
                </FormLabel>
            </FormControl>
        </div>
    );
};