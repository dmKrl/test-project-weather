/* eslint-disable react/prop-types */
import SearchForm from '../SearchForm/SearchForm';
import s from './Header.module.css';

const Header = (props) => {
  const { isShowingHeadingCityName } = props;
  return (
    <div className={s.header}>
      <div className={s.headerLogo}>
        <img src="/src/assets/images/sun clouds.svg" alt="weather-image" />
        <p>Погода</p>
      </div>
      <div className={s.headerInputSearch}>
        {isShowingHeadingCityName && <SearchForm />}
      </div>
    </div>
  );
};

export default Header;
