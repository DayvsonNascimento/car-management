import { useMemo } from 'react';
import CarCard from '../CarRow/CarRow';

import { Container, Table, TableHeader, TableRow, HeaderCell, TableBody } from './CarsTable.styled';

import { headerValues, columnsDef } from 'utils/consts';

const cars = [
  {
    model: 'Mustang',
    brand: 'Ford',
    mainColor: 'Red',
    value: 30000,
    productionCost: 17000,
    transportationCost: 5000,
  },
  {
    model: 'Camaro',
    brand: 'Chevy',
    mainColor: 'Blue',
    value: 27000,
    productionCost: 20000,
    transportationCost: 2000,
  },
  {
    model: 'Silverado',
    brand: 'Chevy',
    mainColor: 'Black',
    value: 40000,
    productionCost: 30000,
    transportationCost: 5000,
  },
];

const CarsTable = () => {
  const getCompleteCarData = useMemo(() => {
    return cars.map((carData) => ({
      ...carData,
      totalCost: carData.productionCost + carData.transportationCost,
    }));
  }, []);

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
