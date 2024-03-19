import { useContext, useState } from 'react';
import s from './WeatherTable.module.css';
import dataWeatherContext from './../../context/dataWeatherContext';
import changeDate from './../../app/changeDate';

const WeatherTable = () => {
  const [showToday, setShowToday] = useState(true);
  const [chooseDayOrWeek, setChooseDayOrWeek] = useState('today');
  const { dataWeather } = useContext(dataWeatherContext);
  const { todayWeather, weekWeather } = dataWeather;

  console.log(weekWeather);

  const toggleView = (string) => {
    if (string == chooseDayOrWeek) {
      return;
    }
    setShowToday(!showToday);
    setChooseDayOrWeek(string);
  };

  return (
    <div>
      <div className={s.weatherButtonSwitchBlock}>
        <button
          className={`${s.weatherButtonSwitch} ${showToday && s.active}`}
          onClick={() => toggleView('today')}
        >
          Сегодня
        </button>
        <button
          className={`${s.weatherButtonSwitch} ${!showToday && s.active}`}
          onClick={() => toggleView('week')}
        >
          5 дней
        </button>
      </div>

      <div className={s.weatherTable}>
        {showToday ? (
          <div className={s.weatherForToday}>
            <div className={s.weatherInfoToday}>
              <p>
                Температура воздуха: <strong>{todayWeather?.tempC} °C</strong>
              </p>
              <p>
                Ощущается как: <strong>{todayWeather?.feelsLikeC} °C</strong>
              </p>
              <p>
                Осадки в мм: <strong>{todayWeather?.precipMm}</strong>
              </p>
              <p>
                Скорость ветра: <strong>{todayWeather?.windMph} м/с</strong>
              </p>
              <p>
                <strong>{todayWeather?.condition}</strong>{' '}
              </p>
            </div>
            <div className={s.weatherIconToday}>
              <img src={todayWeather?.imgPath} alt="cloudy" />
            </div>
          </div>
        ) : (
          <div className={s.weatherCardsContainer}>
            {weekWeather?.map((dataWeek) => (
              <div key={dataWeek.date} className={s.weatherCard}>
                <h3>{changeDate(dataWeek.date)}</h3>
                <img src={dataWeek.imgPathWeek} alt="" />
                <div className={s.weatherCardInfo}>
                  <p>
                    Температура воздуха:{' '}
                    <strong>{dataWeek.day.avgtemp_c} °C</strong>
                  </p>
                  <p>
                    Скорость ветра:{' '}
                    <strong>{dataWeek.day.maxwind_mph} м/с</strong>
                  </p>
                  <p>
                    Осадки: <strong>{dataWeek.day.totalprecip_mm}</strong>
                  </p>
                  <p>
                    Влажность: <strong>{dataWeek.day.avghumidity}%</strong>
                  </p>
                  <p>
                    Облачность: <strong>{dataWeek.conditionWeek}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherTable;
