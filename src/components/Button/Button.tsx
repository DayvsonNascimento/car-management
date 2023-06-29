import { Container, CustomButton } from './Button.styled';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

interface ButtonProps {
  text: string;
  show?: boolean;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  action?: () => void;
}

const Button = ({
  text,
  show = true,
  disabled = false,
  loading = false,
  className,
  action,
}: ButtonProps) => {
  return show ? (
    <Container>
      <CustomButton className={className} type='button' disabled={disabled} onClick={action}>
        {loading ? <LoadingSpinner /> : text}
      </CustomButton>
    </Container>
  ) : null;
};

export default Button;
