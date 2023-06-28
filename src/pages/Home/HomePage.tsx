import { useNavigate } from 'react-router-dom';

import CarsTable from 'components/CarsTable';
import Button from 'components/Button';

import { Container, ContentContainer, ButtonContainer } from './HomePage.styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentContainer>
        <ButtonContainer>
          <Button disabled={false} action={() => navigate('/new')} text='Add new' />
          <Button disabled={false} text='Update' />
        </ButtonContainer>

        <CarsTable />
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
