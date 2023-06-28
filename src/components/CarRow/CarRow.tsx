import { Container, RowCell } from './CarRow.styled';

interface RowData {
  model: string;
  brand: string;
  mainColor: string;
  value: number;
  productionCost: number;
  transportationCost: number;
  totalCost: number;
}

interface CarRowProps {
  rowData: RowData;
  columnsDef: string[];
}

const CarRow = ({ rowData, columnsDef }: CarRowProps) => {
  return (
    <Container>
      {columnsDef.map((property) => (
        <RowCell key={property}>{rowData[property as keyof RowData].toLocaleString()}</RowCell>
      ))}
    </Container>
  );
};

export default CarRow;
