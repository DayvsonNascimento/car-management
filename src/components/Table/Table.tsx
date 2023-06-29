import Row from './TableRow/TableRow';

import { Container, Table, TableHeader, TableRow, HeaderCell, TableBody } from './Table.styled';

import { CarData } from 'interfaces/Car';
import { TableColumn } from 'interfaces/TableColumn';

interface TableProps {
  tableData: CarData[];
  columnsDef: TableColumn[];
  isEditing: boolean;
}

const CarsTable = ({ tableData, columnsDef, isEditing }: TableProps) => {
  const headerValues = columnsDef.map((colum) => colum.headerName);

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
            <Row key={index} rowData={carData} columnsDef={columnsDef} isEditing={isEditing} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default CarsTable;
