import CarCard from '../CarRow/CarRow';

import {
  Container,
  Table,
  TableHeader,
  TableRow,
  HeaderCell,
  Body,
} from './CarsTable.styled';

const cars = [
  {
    model: 'Mustang',
    brand: 'Ford',
    mainColor: 'Red',
    value: 30000,
    productionCost: 17000,
    transportationCosts: 5000,
  },
  {
    model: 'Camaro',
    brand: 'Chevy',
    mainColor: 'Blue',
    value: 27000,
    productionCost: 20000,
    transportationCosts: 2000,
  },
  {
    model: 'Silverado',
    brand: 'Chevy',
    mainColor: 'Black',
    value: 40000,
    productionCost: 30000,
    transportationCosts: 5000,
  },
];

const CarsTable = () => {
  return (
    <Container>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderCell>Model</HeaderCell>
            <HeaderCell>Brand</HeaderCell>
            <HeaderCell>Main Color</HeaderCell>
            <HeaderCell style={{ width: '12%' }}>Value</HeaderCell>
            <HeaderCell>Production Cost</HeaderCell>
            <HeaderCell style={{ width: '20%' }}>
              Transportation Cost
            </HeaderCell>
            <HeaderCell>Total</HeaderCell>
          </TableRow>
        </TableHeader>
        <Body>
          {cars?.map((car, index) => (
            <CarCard key={index} carData={car} />
          ))}
        </Body>
      </Table>
    </Container>
  );
};

export default CarsTable;
