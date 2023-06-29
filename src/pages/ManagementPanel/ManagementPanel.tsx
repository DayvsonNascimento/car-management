import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from 'components/Table';
import Button from 'components/Button';

import { Container, ContentContainer, ButtonContainer } from './ManagementPanel.styled';

import { fetchCarsData } from 'services/Cars/cars';

import { CarData } from 'interfaces/Car';
import { TableColumn } from 'interfaces/TableColumn';

import { carBrands, popularColors } from 'utils/consts';

const formatNumericValue = (value: number) => value.toLocaleString();

const getTotalCost = ({
  productionCost,
  transportationCost,
}: {
  productionCost: number;
  transportationCost: number;
}) => formatNumericValue(productionCost + transportationCost);

const columnsDef: TableColumn[] = [
  { headerName: 'Model', field: 'model', cellRender: (item) => item.model },
  {
    headerName: 'Brand',
    field: 'brand',
    inputType: 'select',
    options: carBrands,
    cellRender: (item) => item.brand,
  },
  {
    headerName: 'Main Color',
    field: 'mainColor',
    inputType: 'select',
    options: popularColors,
    cellRender: (item) => item.mainColor,
  },
  { headerName: 'Value', field: 'value', cellRender: (item) => formatNumericValue(item.value) },
  {
    headerName: 'Production Cost',
    field: 'productionCost',
    cellRender: (item) => formatNumericValue(item.productionCost),
  },
  {
    headerName: 'Transportation Cost',
    field: 'transportationCost',
    cellRender: (item) => formatNumericValue(item.transportationCost),
  },
  {
    headerName: 'Total',
    field: 'totalCost',
    editable: false,
    cellRender: getTotalCost,
  },
];

const ManagementPanel = () => {
  const [carData, setCarData] = useState<CarData[]>([]);
  const [isEditing, setIsEditing] = useState(false);
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
          <Button disabled={isEditing} action={() => navigate('/new')} text='Add new' />
          <Button show={!isEditing} action={() => setIsEditing(true)} text='Update' />

          <Button show={isEditing} action={() => setIsEditing(true)} text='Save' />
          <Button
            show={isEditing}
            className={'cancel-button'}
            action={() => navigate(0)}
            text='Cancel'
          />
        </ButtonContainer>

        <Table tableData={carData} columnsDef={columnsDef} isEditing={isEditing} />
      </ContentContainer>
    </Container>
  );
};

export default ManagementPanel;