import { Label, Input, ErrorText } from '../Input.styled';

type Event = React.ChangeEvent<HTMLInputElement>;

interface DefaulInputProps {
  type?: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  errorMessage: string;
  onChange: (event: Event) => void;
  onFocus?: () => void;
}

const DefaulInput = ({ label, value, errorMessage, onChange, onFocus }: DefaulInputProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Input value={value || ''} onChange={onChange} onFocus={onFocus} />
      <ErrorText>{errorMessage}</ErrorText>
    </>
  );
};

export default DefaulInput;
