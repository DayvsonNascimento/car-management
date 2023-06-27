import { Container, RowCell } from './CarRow.styled';

interface CarRowProps {
  carData: {
    model: string;
    brand: string;
    mainColor: string;
    value: number;
    productionCost: number;
    transportationCosts: number;
  };
}

const CarRow = ({
  carData: {
    model,
    brand,
    mainColor,
    value,
    productionCost,
    transportationCosts,
  },
}: CarRowProps) => {
  const totalCost = (
    productionCost + transportationCosts || 0
  ).toLocaleString();

  return (
    <Container>
      <RowCell>{model}</RowCell>
      <RowCell>{brand}</RowCell>
      <RowCell>{mainColor}</RowCell>
      <RowCell>{value?.toLocaleString()}</RowCell>
      <RowCell>{productionCost?.toLocaleString()}</RowCell>
      <RowCell>{transportationCosts?.toLocaleString()}</RowCell>
      <RowCell>{totalCost}</RowCell>
    </Container>
  );
};

export default CarRow;
