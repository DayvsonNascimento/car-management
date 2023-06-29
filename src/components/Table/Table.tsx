import { SetStateAction, Dispatch } from 'react';

import TableRow from './TableRow/TableRow';

import { Container, Table, TableHeader, HeaderRow, HeaderCell, TableBody } from './Table.styled';

import { CarData } from 'interfaces/Car';
import { TableDefinition } from 'interfaces/TableDefinition';

import { hasEmptyField } from 'utils/utils';

interface TableProps {
  tableData: CarData[];
  columnsDef: TableDefinition[];
  setData: Dispatch<SetStateAction<CarData[]>>;
  setDisableSave: Dispatch<SetStateAction<boolean>>;
  isEditing: boolean;
}

const CustomTable = ({ tableData, columnsDef, setData, setDisableSave, isEditing }: TableProps) => {
  const headerValues = columnsDef.map((colum) => colum.headerName);

  const updateTableData = (newRow: CarData) => {
    const indexToUpdate = tableData.findIndex((row) => row.id === newRow.id);

    const updatedtableData = tableData.map((element, index) => {
      if (index === indexToUpdate) return newRow;

      return element;
    });

    setData(updatedtableData);
  };

  const handleUpdate = (newRow: CarData) => {
    if (hasEmptyField(newRow)) {
      setDisableSave(true);
    } else {
      setDisableSave(false);
      updateTableData(newRow);
    }
  };

  return (
    <Container>
      <Table>
        <TableHeader>
          <HeaderRow>
            {headerValues.map((value, index) => (
              <HeaderCell key={index}>{value}</HeaderCell>
            ))}
          </HeaderRow>
        </TableHeader>

        <TableBody>
          {tableData?.map((carData, index) => (
            <TableRow
              key={index}
              rowData={carData}
              columnsDef={columnsDef}
              isEditing={isEditing}
              handleUpdate={handleUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default CustomTable;
