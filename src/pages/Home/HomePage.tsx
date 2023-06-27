import CarsTable from '../../components/CarsTable/CarsTable';

import { Container, TableContainer, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>List of Cars</Title>

      <TableContainer>
        <CarsTable />
      </TableContainer>
    </Container>
  );
};

export default HomePage;
