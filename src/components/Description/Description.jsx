/* eslint-disable react/prop-types */
import s from './Description.module.css';
import dataWeatherContext from './../../context/dataWeatherContext';
import { useContext } from 'react';
import showingErrorRequest from '../../context/showingErrorRequest';
const Description = ({ isShowingInput }) => {
  const { dataWeather } = useContext(dataWeatherContext);
  const { errorRequest } = useContext(showingErrorRequest);
  return (
    <div className={s.description}>
      {isShowingInput ? (
        <>
          <h1 className={s.descriptionHeading}>
            Погода в городе {dataWeather.todayWeather.name}
          </h1>
          <span>{dataWeather.todayWeather.country}</span>
        </>
      ) : (
        <>
          <h1 className={s.descriptionHeading}>Погода в странах мира</h1>
          <p className={s.descriptionText}>
            Смотрите погоду в интересующем городе
          </p>
          {errorRequest && (
            <p className={s.descriptionTextError}>
              Произошла ошибка запроса, введите корректное название города и
              повторите попытку
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Description;
