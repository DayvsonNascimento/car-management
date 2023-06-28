import CarsTable from 'components/CarsTable';
import Button from 'components/Button';

import { Container, ContentContainer, ButtonContainer, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <ContentContainer>
        <ButtonContainer>
          <Button disabled={false} text='Add new' />
          <Button disabled={false} text='Update' />
        </ButtonContainer>

        <CarsTable />
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
