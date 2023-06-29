import { useState } from 'react';

import { Container, RowCell, CellInput } from './TableRow.styled';

import { CarData } from 'interfaces/Car';
import { Event } from 'interfaces/DefaultInput';

interface RowData extends CarData {
  totalCost: number;
}

interface TableRowProps {
  rowData: RowData;
  columnsDef: string[];
}

const TableRow = ({ rowData, columnsDef }: TableRowProps) => {
  const [rowValues, setRowvalues] = useState(rowData);
  const [editing, setEditing] = useState(false);

  const handleChange = (property: string, event: Event) => {
    setRowvalues({ ...rowValues, [property]: event.target.value });
  };

  return (
    <Container>
      {columnsDef.map((property) => (
        <RowCell key={property}>
          <CellInput
            value={rowValues[property as keyof RowData].toLocaleString()}
            onChange={(event: Event) => handleChange(property, event)}
            disabled={property === 'totalCost' || !editing}
            $isEditing={editing}
          ></CellInput>
        </RowCell>
      ))}
    </Container>
  );
};

export default TableRow;
