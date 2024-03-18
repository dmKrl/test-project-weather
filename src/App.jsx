import { useState } from 'react';
import './App.css';
import AppRoutes from './routes';
import ShowingSearchContext from './context/showingSearchContext';
import dataWeatherContext from './context/dataWeatherContext';

function App() {
  const [isShowingSearchInput, setIsShowingSearchInput] = useState(false);
  const [dataWeather, setDataWeather] = useState('');

  return (
    <ShowingSearchContext.Provider
      value={{
        isShowingInput: isShowingSearchInput,
        changeIsShowing: setIsShowingSearchInput,
      }}
    >
      <dataWeatherContext.Provider
        value={{
          dataWeather: dataWeather,
          changeDataWeather: setDataWeather,
        }}
      >
        <AppRoutes />;
      </dataWeatherContext.Provider>
    </ShowingSearchContext.Provider>
  );
}

export default App;
