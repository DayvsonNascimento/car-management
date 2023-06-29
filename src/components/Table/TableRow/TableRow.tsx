import { useState } from 'react';

import { Container, RowCell, CellInput, CellSelect } from './TableRow.styled';

import { CarData } from 'interfaces/Car';
import { Event } from 'interfaces/DefaultInput';

import { TableColumn } from 'interfaces/TableColumn';

interface RowData extends CarData {
  totalCost: number;
}

interface TableRowProps {
  rowData: RowData;
  columnsDef: TableColumn[];
  isEditing: boolean;
}

const TableRow = ({ rowData, columnsDef, isEditing }: TableRowProps) => {
  const [rowValues, setRowvalues] = useState(rowData);

  const handleChange = (property: string, event: Event) => {
    setRowvalues({ ...rowValues, [property]: event.target.value });
  };

  return (
    <Container>
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
