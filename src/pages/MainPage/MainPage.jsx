import { useState } from 'react';
import Header from '../../components/Header/Header';
import * as s from './MainPage.style.css';

const MainPage = () => {
  const [isShowingHeadingCityName] =
    useState(false);
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Header isShowing={isShowingHeadingCityName} />
      </div>
    </div>
  );
};

export default MainPage;
