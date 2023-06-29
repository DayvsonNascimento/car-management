import { useState } from 'react';

import TableCell from '../TableCell/TableCell';

import { Container } from './TableRow.styled';

import { CarData } from 'interfaces/Car';
import { Event } from 'interfaces/DefaultInput';

import { TableDefinition } from 'interfaces/TableDefinition';

interface TableRowProps {
  rowData: CarData;
  columnsDef: TableDefinition[];
  handleUpdate: (element: CarData) => void;
  isEditing: boolean;
}

const TableRow = ({ rowData, columnsDef, handleUpdate, isEditing }: TableRowProps) => {
  const [rowValues, setRowvalues] = useState(rowData);

  const handleChange = (
    property: string,
    event: Event,
    parse?: (value: string) => number | undefined,
  ) => {
    const targetValue = event?.target.value;
    const value = typeof parse === 'function' ? parse(targetValue) : targetValue;

    if (value !== undefined || event.target.value.length === 0) {
      const updatedRow = { ...rowValues, [property]: value || '' };

      handleUpdate(updatedRow);
      setRowvalues(updatedRow);
    }
  };

  return (
    <Container $isEditing={isEditing}>
      {columnsDef.map((itemDefinition, index) => (
        <TableCell
          key={index}
          rowValues={rowValues}
          itemDefinition={itemDefinition}
          handleChange={handleChange}
          isEditing={isEditing}
        />
      ))}
    </Container>
  );
};

export default TableRow;
