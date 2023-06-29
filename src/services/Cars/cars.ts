import api from '../api';

import { CarData } from 'interfaces/Car';

export const fetchCarsData = async () => {
  try {
    const { data } = await api.get('/cars');

    return data || [];
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const addCar = async (body: { [key: string]: string | undefined }) => {
  try {
    const { data } = await api.post('/car', body);

    return data || [];
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const updateCarsData = async (dataToUpdate: CarData[]) => {
  try {
    const { data } = await api.put('/cars', dataToUpdate);

    return data || { message: 'Updated' };
  } catch (error) {
    console.error(error);

    return [];
  }
};
