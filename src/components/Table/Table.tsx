import { useMemo } from 'react';
import CarCard from './TableRow/TableRow';

import { Container, Table, TableHeader, TableRow, HeaderCell, TableBody } from './Table.styled';

import { CarData } from 'interfaces/Car';
import { TableColumn } from 'interfaces/TableColumn';

interface TableProps {
  tableData: CarData[];
  columnsDef: TableColumn[];
  isEditing: boolean;
}

const CarsTable = ({ tableData, columnsDef, isEditing }: TableProps) => {
  const getCompleteCarData = useMemo(() => {
    return tableData.map((carData) => ({
      ...carData,
      totalCost: carData.productionCost + carData.transportationCost,
    }));
  }, [tableData]);

  const headerValues = columnsDef.map((colum) => colum.headerName as string);

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
          {getCompleteCarData?.map((carData, index) => (
            <CarCard key={index} rowData={carData} columnsDef={columnsDef} isEditing={isEditing} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default CarsTable;
