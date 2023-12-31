import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from 'components/Table';
import Button from 'components/Button';

import { Container, ContentContainer, ButtonContainer } from './ManagementPanel.styled';

import { fetchCarsData, updateCarsData } from 'services/Cars/cars';

import { CarData } from 'interfaces/Car';
import { TableDefinition } from 'interfaces/TableDefinition';

import { carBrands, popularColors } from 'utils/consts';
import { parseNumberInput, formatNumericValue, getTotalCost } from 'utils/utils';

const columnsDef: TableDefinition[] = [
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
  {
    headerName: 'Value',
    field: 'value',
    parser: parseNumberInput,
    cellRender: (item) => formatNumericValue(item.value),
  },
  {
    headerName: 'Production Cost',
    field: 'productionCost',
    parser: parseNumberInput,
    cellRender: (item) => formatNumericValue(item.productionCost),
  },
  {
    headerName: 'Transportation Cost',
    field: 'transportationCost',
    parser: parseNumberInput,
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
  const [disableSave, setDisableSave] = useState(false);
  const [hasSubmittedData, setHasSubmittedData] = useState(false);
  const navigate = useNavigate();

  const getCarsData = async () => {
    const response = await fetchCarsData();

    setCarData(response);
  };

  const saveCarData = async () => {
    setHasSubmittedData(true);

    const response = await updateCarsData(carData);

    if (response) {
      navigate(0);
    }

    setDisableSave(false);
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

          <Button
            show={isEditing}
            disabled={disableSave}
            loading={hasSubmittedData}
            action={() => saveCarData()}
            text='Save'
          />
          <Button
            show={isEditing}
            disabled={hasSubmittedData}
            customClass={'cancel-button'}
            action={() => navigate(0)}
            text='Cancel'
          />
        </ButtonContainer>

        <Table
          tableData={carData}
          columnsDef={columnsDef}
          isEditing={isEditing}
          setData={setCarData}
          setDisableSave={setDisableSave}
        />
      </ContentContainer>
    </Container>
  );
};

export default ManagementPanel;
