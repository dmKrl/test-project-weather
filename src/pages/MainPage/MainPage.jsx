import Header from '../../components/Header/Header';
import s from './MainPage.module.css';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
