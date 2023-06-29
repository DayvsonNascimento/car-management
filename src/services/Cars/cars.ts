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
