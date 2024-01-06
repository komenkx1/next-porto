import Select from "react-select";

type Props = {
  items: Array<any>;
  valueField: string;
  labelField: string;
  multipleItemField?: string;
  isSearch?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
  placeholder?: string;
  value?: any;
  onChange: (selectedOption: any) => void;
};

export default function CSelect(props: Props) {
  const isMulti = props.isMultiple ?? false;

  // If isMulti is true, convert props.value to an array
  const selectedValues = isMulti
    ? props.items.filter((item) =>
        props.value?.some((valueItem: any) => {
          const field = valueItem[props.multipleItemField ?? "tag"] ?? "";
          return field?.id === item.id;
        })
      )
    : props.items.find((item) => item.id === props.value);

  const labels = isMulti
    ? selectedValues.map((item: any) => {
        item.label = item[props.labelField];
        item.value = item[props.valueField];
      })
    : selectedValues?.[props.labelField];

  const defaultInputValue = isMulti ? "" : labels;

  return (
    <>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "1px solid #cbd3de" : "#cbd3de",
            outline: state.isFocused ? "none!important" : "",
            boxShadow: state.isFocused
              ? "0px 0px 10px rgba(0, 0, 0, 0.15)"
              : "",
          }),
        }}
        className={isMulti ? "basic-multi" : "basic-single"}
        classNamePrefix="select"
        isLoading={props.isLoading ?? false}
        isSearchable={props.isSearch ?? true}
        isMulti={isMulti}
        name="color"
        placeholder={props.placeholder ?? "Select..."}
        onChange={(selectedOptions) => {
          props.onChange(selectedOptions);
        }}
        options={props.items.map((item) => ({
          value: item[props.valueField],
          label: item[props.labelField],
        }))}
        defaultValue={selectedValues}
        defaultInputValue={defaultInputValue}
        // bentuk custom iption
        // formatOptionLabel={(option) => `${option.label}`}
      />
    </>
  );
}
