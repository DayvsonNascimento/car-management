import { Container, CustomButton } from './Button.styled';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

interface ButtonProps {
  text: string;
  show?: boolean;
  disabled?: boolean;
  customClass?: string;
  loading?: boolean;
  action?: () => void;
}

const Button = ({
  text,
  show = true,
  disabled = false,
  loading = false,
  customClass,
  action,
}: ButtonProps) => {
  return show ? (
    <Container>
      <CustomButton className={customClass} type='button' disabled={disabled} onClick={action}>
        {loading ? <LoadingSpinner /> : text}
      </CustomButton>
    </Container>
  ) : null;
};

export default Button;
