import { Container, Spinner } from './LoadingSpinner.styled';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
      <Spinner className={className}/>
  );
};

export default LoadingSpinner;
