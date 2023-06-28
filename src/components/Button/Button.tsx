import { Container, CustomButton } from './Button.styled';

interface ButtonProps {
  disabled: boolean;
  text: string;
  className?: string;
  action?: () => void;
}

const Button = ({ disabled, text, className, action }: ButtonProps) => {
  return (
    <Container>
      <CustomButton className={className} type='button' disabled={disabled} onClick={action}>
        {text}
      </CustomButton>
    </Container>
  );
};

export default Button;
