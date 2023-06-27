import { Container, CustomButton } from './Button.styled';

interface ButtonProps {
  disabled: boolean;
  text: string;
}

const Button = ({ disabled, text }: ButtonProps) => {
  return (
    <Container>
      <CustomButton disabled={disabled}>{text}</CustomButton>
    </Container>
  );
};

export default Button;
