import { createContext } from 'react';

const dataWeatherContext = createContext({
  dataWeather: '',
  changeDataWeather: () => {},
});

export default dataWeatherContext;
