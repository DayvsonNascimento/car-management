import { useState } from 'react';

import { Container, Label, Select, ErrorText } from '../Input.styled';

import { DefaulInputProps } from 'interfaces/DefaultInput';

interface CustomSelectProps extends DefaulInputProps {
  name: string;
  options: string[];
}

const CustomSelect = ({
  label,
  name,
  value,
  options,
  errorMessage,
  onChange,
  onFocus,
}: CustomSelectProps) => {
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
