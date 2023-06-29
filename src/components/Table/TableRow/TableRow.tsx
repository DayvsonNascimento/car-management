import { Container, RowCell } from './TableRow.styled';

import { CarData } from 'interfaces/Car';

interface RowData extends CarData {
  totalCost: number;
}

interface TableRowProps {
  rowData: RowData;
  columnsDef: string[];
}

const TableRow = ({ rowData, columnsDef }: TableRowProps) => {
  return (
    <Container>
      {columnsDef.map((property) => (
        <RowCell key={property}>{rowData[property as keyof RowData].toLocaleString()}</RowCell>
      ))}
    </Container>
  );
};

export default TableRow;
