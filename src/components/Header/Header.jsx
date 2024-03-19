/* eslint-disable react/prop-types */
import { useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import s from './Header.module.css';
import showingSearchContext from '../../context/showingSearchContext';

const Header = () => {
  const { isShowingInput } = useContext(showingSearchContext);
  return (
    <div className={s.header}>
      <div className={s.headerLogo}>
        <a href="/">
          <img
            src="/src/assets/images/icons/sun clouds.svg"
            alt="weather-image"
          />
        </a>
        <p>Погода</p>
      </div>
      <div className={s.headerInputSearch}>
        {isShowingInput && <SearchForm />}
      </div>
    </div>
  );
};

export default Header;
