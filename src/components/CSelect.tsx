import Select from "react-select";
type Props = {
  items: Array<any>;
  valueFidld: string;
  labelField: string;
  isSearch?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
  placeholder?: string;
  onChange: (selectedOption: any) => void;
};

export default function CSelect(props: Props) {
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
        className="basic-single"
        classNamePrefix="select"
        isLoading={props.isLoading ?? false}
        isSearchable={props.isSearch ?? true}
        isMulti={props.isMultiple ?? false}
        name="color"
        getOptionValue={(option) => option.value}
        placeholder={props.placeholder ?? "Select..."}
        onChange={(selectedOptions) => {
          console.log(selectedOptions); // Pastikan ini menghasilkan array objek
          props.onChange(selectedOptions);
        }}
        options={props.items.map((item) => ({
          value: item[props.valueFidld],
          label: item[props.labelField],
        }))}
      />
    </>
  );
}
