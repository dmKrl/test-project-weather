import { useState } from 'react';
import Header from '../../components/Header/Header';
import s from './MainPage.module.css';

const MainPage = () => {
  const [isShowingHeadingCityName] = useState(false);
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Header isShowing={isShowingHeadingCityName} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
