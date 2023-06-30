import { Container, Spinner } from './LoadingSpinner.styled';

interface LoadingSpinnerProps {
  customClass?: string;
}

const LoadingSpinner = ({ customClass }: LoadingSpinnerProps) => {
  return (
      <Spinner className={customClass}/>
  );
};

export default LoadingSpinner;
