import { useContext } from 'react';
import Description from '../Description/Description';
import s from './MainLayouts.module.css';
import ShowingSearchContext from '../../context/showingSearchContext';
import SearchForm from '../SearchForm/SearchForm';

const MainLayouts = () => {
  const { isShowingInput } = useContext(ShowingSearchContext);
  return (
    <div className={s.mainLayouts}>
      <div className={s.mainLayoutsContainer}>
        <Description />
        {!isShowingInput && <SearchForm />}
      </div>
    </div>
  );
};

export default MainLayouts;
