import Header from '../../components/Header/Header';
import * as s from './MainPage.style.css';

const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Header />
      </div>
    </div>
  );
};

export default MainPage;
