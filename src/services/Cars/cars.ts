import api from '../api';

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

    return [];
  }
};
