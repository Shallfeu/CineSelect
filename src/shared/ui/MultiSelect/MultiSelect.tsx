import { MultiSelect as LibMultiSelect } from 'react-multi-select-component';
import cls from './MultiSelect.module.scss'

export interface MultiSelectItem {
    label: string;
    value: string;
}

interface MultiSelectProps {
    className?: string;
    options: MultiSelectItem[];
    value: MultiSelectItem[];
    onChange: (value: MultiSelectItem[]) => void;
}

export const MultiSelect = (props: MultiSelectProps) => {
    const {
        className,
        options,
        value,
        onChange,
    } = props;

    return (
        <LibMultiSelect
            className={`${className} ${cls.select}` }
            options={options}
            value={value}
            onChange={onChange}
            labelledBy="Выберите"
            hasSelectAll={false}
            closeOnChangedValue
        />
    );
};