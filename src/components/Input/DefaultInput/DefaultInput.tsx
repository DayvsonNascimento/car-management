import { useState } from 'react';

import { Container, Label, Input, ErrorText } from '../Input.styled';

type Event = React.ChangeEvent<HTMLInputElement>;

interface DefaulInputProps {
  type?: string;
  label: string;
  value: string | number | string[] | undefined;
  errorMessage: string;
  onChange: (event: Event) => void;
  onFocus?: () => void;
}

const DefaulInput = ({ label, value, errorMessage, onChange, onFocus }: DefaulInputProps) => {
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
      <Input
        name={label}
        value={value || ''}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleOnBlur}
      />
      <ErrorText>{errorMessage}</ErrorText>
    </Container>
  );
};

export default DefaulInput;
