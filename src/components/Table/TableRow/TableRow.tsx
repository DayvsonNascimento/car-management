import { useState } from 'react';

import { Container, RowCell, CellInput, CellSelect } from './TableRow.styled';

import { CarData } from 'interfaces/Car';
import { Event } from 'interfaces/DefaultInput';

import { TableColumn } from 'interfaces/TableColumn';

interface TableRowProps {
  rowData: CarData;
  columnsDef: TableColumn[];
  handleUpdate: (element: CarData) => void;
  isEditing: boolean;
}

const TableRow = ({ rowData, columnsDef, handleUpdate, isEditing }: TableRowProps) => {
  const [rowValues, setRowvalues] = useState(rowData);

  const handleChange = (property: string, event: Event) => {
    const updatedRow = { ...rowValues, [property]: event.target.value };

    handleUpdate(updatedRow);
    setRowvalues(updatedRow);
  };

  return (
    <Container $isEditing={isEditing}>
      {columnsDef.map((item) => {
        const { field, editable, inputType, cellRender, options } = item;
        const displaySelectCell = inputType === 'select' && isEditing;

        return (
          <RowCell key={field}>
            {displaySelectCell ? (
              <CellSelect
                value={cellRender(rowValues)}
                onChange={(event: Event) => handleChange(field, event)}
                disabled={editable === false || !isEditing}
                $isEditing={isEditing}
              >
                {options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </CellSelect>
            ) : (
              <CellInput
                value={cellRender(rowValues)}
                onChange={(event: Event) => handleChange(field, event)}
                disabled={editable === false || !isEditing}
                $isEditing={isEditing}
              ></CellInput>
            )}
          </RowCell>
        );
      })}
    </Container>
  );
};

export default TableRow;
