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
      {columnsDef.map((item) => {
        const { field, editable, inputType, options, parser, cellRender } = item;
        const displaySelectCell = inputType === 'select' && isEditing;
        const displayInputValue = editable !== false && isEditing;
        const value = displayInputValue ? rowValues[field as keyof CarData] : cellRender(rowValues);

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
                value={value}
                onChange={(event: Event) => handleChange(field, event, parser)}
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
