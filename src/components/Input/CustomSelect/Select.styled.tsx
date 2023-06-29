import { useState } from 'react';

import { Container, Label, Select, ErrorText } from '../Input.styled';

type Event = React.ChangeEvent<HTMLSelectElement>;

interface DefaulInputProps {
  label: string;
  name: string;
  value: string | number | string[] | undefined;
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
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);

    if (typeof onFocus === 'function') onFocus();
  };

  const handleOnBlur = () => setActive(false);

  return (
    <Container>
      <Label htmlFor={label} error={!!errorMessage} active={active || !!value || !!errorMessage}>
        {label}
      </Label>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleOnBlur}
      >
        <option label=' ' />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <ErrorText>{errorMessage}</ErrorText>
    </Container>
  );
};

export default CustomSelect;
