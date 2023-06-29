import { useMemo } from 'react';
import CarCard from './TableRow/TableRow';

import { Container, Table, TableHeader, TableRow, HeaderCell, TableBody } from './Table.styled';

import { headerValues, columnsDef } from 'utils/consts';

import { CarData } from 'interfaces/Car';

interface TableProps {
  tableData: CarData[];
}

const CarsTable = ({ tableData }: TableProps) => {
  const getCompleteCarData = useMemo(() => {
    return tableData.map((carData) => ({
      ...carData,
      totalCost: carData.productionCost + carData.transportationCost,
    }));
  }, [tableData]);

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
            <CarCard key={index} rowData={carData} columnsDef={columnsDef} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default CarsTable;
