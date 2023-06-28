import { Label, Select, ErrorText } from '../Input.styled';

type Event = React.ChangeEvent<HTMLSelectElement>;

interface DefaulInputProps {
  label: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  options: string[];
  errorMessage: string;
  onChange: (event: Event) => void;
  onFocus?: () => void;
}

const CustomSelect = ({
  label,
  name,
  value,
  options,
  errorMessage,
  onChange,
  onFocus,
}: DefaulInputProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Select name={name} value={value} onChange={onChange} onFocus={onFocus}>
        <option label=' ' />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <ErrorText>{errorMessage}</ErrorText>
    </>
  );
};

export default CustomSelect;
