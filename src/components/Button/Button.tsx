import { Container, CustomButton } from './Button.styled';

interface ButtonProps {
  disabled: boolean;
  text: string;
  action?: () => void;
}

const Button = ({ disabled, text, action }: ButtonProps) => {
  return (
    <Container>
      <CustomButton type='button' disabled={disabled} onClick={action}>
        {text}
      </CustomButton>
    </Container>
  );
};

export default Button;
