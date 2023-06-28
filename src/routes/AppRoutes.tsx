import HomePage from 'pages/Home/HomePage';
import AddCarPage from 'components/AddCar/AddCar';

import { Routes, Route, Navigate } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/new' element={<AddCarPage />}></Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default AppRoutes;
