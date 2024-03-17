import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MainLayouts from './components/MainLayouts/MainLayouts';
import NotFound from './pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<MainLayouts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
