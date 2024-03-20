import { useState } from 'react';
import './App.css';
import AppRoutes from './routes';
import showingSearchContext from './context/showingSearchContext';
import dataWeatherContext from './context/dataWeatherContext';
import showingErrorRequest from './context/showingErrorRequest';

function App() {
  const [isShowingSearchInput, setIsShowingSearchInput] = useState(false);
  const [isShowingSearchInputLoader, setIsShowingSearchInputLoader] =
    useState(false);
  const [dataWeather, setDataWeather] = useState({});
  const [errorRequest, setErrorRequest] = useState(false);

  return (
    <showingSearchContext.Provider
      value={{
        isShowingInput: isShowingSearchInput,
        isShowingLoader: isShowingSearchInputLoader,
        changeIsShowingLoader: setIsShowingSearchInputLoader,
        changeIsShowing: setIsShowingSearchInput,
      }}
    >
      <dataWeatherContext.Provider
        value={{
          dataWeather: dataWeather,
          changeDataWeather: setDataWeather,
        }}
      >
        <showingErrorRequest.Provider
          value={{ errorRequest, changeErrorRequest: setErrorRequest }}
        >
          <AppRoutes />;
        </showingErrorRequest.Provider>
      </dataWeatherContext.Provider>
    </showingSearchContext.Provider>
  );
}

export default App;
