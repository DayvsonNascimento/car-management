import { render, fireEvent, screen, act } from '@testing-library/react';
import * as router from 'react-router';
import * as API from '../../../services/Cars/cars';

import AddCarForm from '../AddCarForm';

const navigate = jest.fn();

const mockedCarData = {
  model: 'Mustang',
  brand: 'Ford',
  mainColor: 'Red',
  value: 12000,
  productionCost: 5000,
  transportationCost: 2000,
};

describe('AddCarForm component shoud', () => {
  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  it('render without errors', async () => {
    render(<AddCarForm />);
  });

  it('disable the button when there fields with error', () => {
    const { container } = render(<AddCarForm />);

    const modelInput = container.querySelector(`input[name="Model"]`)!;
    const valueInput = container.querySelector(`input[name="Value"]`)!;
    const saveButton = screen.getByText(/Save/i).closest('button')!;

    fireEvent.change(modelInput, {
      target: { value: 'Camaro' },
    });

    fireEvent.change(valueInput, {
      target: { value: '' },
    });

    act(() => {
      fireEvent.click(saveButton);
    });

    expect(saveButton).toBeDisabled();
  });

  it('call the api to add a car when all the data provided is valid', () => {
    const { container } = render(<AddCarForm />);

    const modelInput = container.querySelector(`input[name="Model"]`)!;
    const brandInput = container.querySelector(`select[name="brands"]`)!;
    const mainColorInput = container.querySelector(`select[name="colors"]`)!;
    const valueInput = container.querySelector(`input[name="Value"]`)!;
    const productionCostInput = container.querySelector(`input[name="Production Cost"]`)!;
    const transportationCostInput = container.querySelector(`input[name="Transportation Cost"]`)!;
    const saveButton = screen.getByText(/Save/i).closest('button')!;

    const spy = jest.spyOn(API, 'addCar').mockResolvedValue({ message: 'Resolved' });

    fireEvent.change(modelInput, {
      target: { value: mockedCarData.model },
    });

    fireEvent.change(brandInput, {
      target: { value: mockedCarData.brand },
    });

    fireEvent.change(mainColorInput, {
      target: { value: mockedCarData.mainColor },
    });

    fireEvent.change(productionCostInput, {
      target: { value: mockedCarData.productionCost },
    });

    fireEvent.change(transportationCostInput, {
      target: { value: mockedCarData.transportationCost },
    });

    fireEvent.change(valueInput, {
      target: { value: mockedCarData.value },
    });

    act(() => {
      fireEvent.click(saveButton);
    });

    expect(spy).toHaveBeenCalledWith(mockedCarData);
  });
});
