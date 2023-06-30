import { RowCell, CellInput, CellSelect } from './TableCell.styled';

import { CarData } from 'interfaces/Car';
import { Event } from 'interfaces/DefaultInput';

import { TableDefinition } from 'interfaces/TableDefinition';

interface TableCellrops {
  rowValues: CarData;
  itemDefinition: TableDefinition;
  isEditing: boolean;
  handleChange: (
    propery: string,
    event: Event,
    parse?: (value: string) => number | undefined,
  ) => void;
}

const TableCell = ({ rowValues, itemDefinition, isEditing, handleChange }: TableCellrops) => {
  const { field, editable, inputType, options, parser, cellRender } = itemDefinition;
  const displaySelectCell = inputType === 'select' && isEditing;
  const editEnabled = editable !== false && isEditing;
  const value = editEnabled ? rowValues[field as keyof CarData] : cellRender(rowValues);

  return (
    <RowCell>
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
          $isEditing={editEnabled}
        ></CellInput>
      )}
    </RowCell>
  );
};

export default TableCell;
