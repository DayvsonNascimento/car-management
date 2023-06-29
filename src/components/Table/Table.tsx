import { SetStateAction, Dispatch, useEffect } from 'react';

import Row from './TableRow/TableRow';

import { Container, Table, TableHeader, TableRow, HeaderCell, TableBody } from './Table.styled';

import { CarData } from 'interfaces/Car';
import { TableColumn } from 'interfaces/TableColumn';

import { hasEmptyField } from 'utils/utils';

interface TableProps {
  tableData: CarData[];
  columnsDef: TableColumn[];
  setData: Dispatch<SetStateAction<CarData[]>>;
  setDisableSave: Dispatch<SetStateAction<boolean>>;
  isEditing: boolean;
}

const CarsTable = ({ tableData, columnsDef, setData, setDisableSave, isEditing }: TableProps) => {
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
          <TableRow>
            {headerValues.map((value, index) => (
              <HeaderCell key={index}>{value}</HeaderCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.map((carData, index) => (
            <Row
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

export default CarsTable;
