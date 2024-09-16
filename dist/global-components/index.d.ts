import * as react_jsx_runtime from 'react/jsx-runtime';

interface Option {
    label: string;
    value: string;
}

interface SelectSearchProps {
    id: string;
    name: string;
    options: Option[];
    placeholder: string;
    value: Option;
    isClearable: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    className: string;
    onChange: (selectedObject: Option | null) => void;
}
declare function SelectSearch(props: Partial<SelectSearchProps>): react_jsx_runtime.JSX.Element;

declare function Video(): react_jsx_runtime.JSX.Element;

export { type Option, SelectSearch, type SelectSearchProps, Video };
