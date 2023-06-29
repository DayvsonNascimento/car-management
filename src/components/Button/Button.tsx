import { Container, CustomButton } from './Button.styled';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

interface ButtonProps {
  disabled: boolean;
  text: string;
  className?: string;
  loading?: boolean;
  action?: () => void;
}

const Button = ({ disabled, text, className, loading = false, action }: ButtonProps) => {
  console.log(disabled);
  return (
    <Container>
      <CustomButton className={className} type='button' disabled={disabled} onClick={action}>
        {loading ? <LoadingSpinner /> : text}
      </CustomButton>
    </Container>
  );
};

export default Button;
