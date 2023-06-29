import { SetStateAction, Dispatch } from 'react';

import TableRow from './TableRow/TableRow';

import {
  Container,
  TableContent,
  TableHeader,
  HeaderRow,
  HeaderCell,
  TableBody,
  SpinnerContainer,
} from './Table.styled';

import { CarData } from 'interfaces/Car';
import { TableDefinition } from 'interfaces/TableDefinition';

import { hasEmptyField } from 'utils/utils';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

interface TableProps {
  tableData: CarData[];
  columnsDef: TableDefinition[];
  setData: Dispatch<SetStateAction<CarData[]>>;
  setDisableSave: Dispatch<SetStateAction<boolean>>;
  isEditing: boolean;
}

const Table = ({ tableData, columnsDef, setData, setDisableSave, isEditing }: TableProps) => {
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

  const hasData = !!tableData.length;

  return (
    <Container>
      <TableContent>
        <TableHeader>
          <HeaderRow>
            {headerValues.map((value, index) => (
              <HeaderCell key={index}>{value}</HeaderCell>
            ))}
          </HeaderRow>
        </TableHeader>

        <TableBody $hasData={hasData}>
          {hasData ? (
            <>
              {tableData.map((carData, index) => (
                <TableRow
                  key={index}
                  rowData={carData}
                  columnsDef={columnsDef}
                  isEditing={isEditing}
                  handleUpdate={handleUpdate}
                />
              ))}
            </>
          ) : (
            <SpinnerContainer>
              <LoadingSpinner className='spinner' />
            </SpinnerContainer>
          )}
        </TableBody>
      </TableContent>
    </Container>
  );
};

export default Table;
