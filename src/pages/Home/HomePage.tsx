import CarsTable from '../../components/CarsTable';
import Button from '../../components/Button';

import {
  Container,
  ContentContainer,
  TableContainer,
  Title,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>List of Cars</Title>

      <ContentContainer>
        <Button disabled={false} text="Add New" />

        <TableContainer>
          <CarsTable />
        </TableContainer>
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
