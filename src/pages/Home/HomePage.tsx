import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from 'components/Table';
import Button from 'components/Button';

import { Container, ContentContainer, ButtonContainer } from './HomePage.styled';

import { fetchCarsData } from 'services/Cars/cars';

import { CarData } from 'interfaces/Car';

const HomePage = () => {
  const [carData, setCarData] = useState<CarData[]>([]);
  const navigate = useNavigate();

  const getCarsData = async () => {
    const response = await fetchCarsData();

    setCarData(response);
  };

  useEffect(() => {
    getCarsData();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <ButtonContainer>
          <Button disabled={false} action={() => navigate('/new')} text='Add new' />
          <Button disabled={false} text='Update' />
        </ButtonContainer>

        <Table tableData={carData} />
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
