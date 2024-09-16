import ReactSelect from "react-select";
import type { Option } from "../../shared-components/utils/types";

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

function SelectSearch(props: Partial<SelectSearchProps>) {
  return (
    <ReactSelect
      isMulti={false}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={{
        control(base) {
          return {
            ...base,
            minHeight: "unset",
          };
        },
        input(base) {
          return {
            ...base,
            margin: "1.25px",
          };
        },
        option(base) {
          return {
            ...base,
            padding: "6px 12px",
          };
        },
        clearIndicator: (base) => ({
          ...base,
          padding: "3px",
        }),
        menu: (base) => ({
          ...base,
          zIndex: 10,
        }),
      }}
      classNames={{
        input: () => "react-select-input",
      }}
      {...props}
    />
  );
}

export { SelectSearch };
export type { SelectSearchProps };
