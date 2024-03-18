import { useState } from 'react';
import s from './WeatherTable.module.css';

const WeatherTable = () => {
  const [showToday, setShowToday] = useState(true);

  const toggleView = () => {
    setShowToday(!showToday);
  };

  const timeIntervals = showToday
    ? ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
    : ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];

  const data = {
    '00:00': {
      temperature: '10°C',
      windSpeed: '5 м/с',
      precipitation: 'Солнечно',
    },
    '04:00': {
      temperature: '13°C',
      windSpeed: '7 м/с',
      precipitation: 'Облачно',
    },
    '08:00': {
      temperature: '15°C',
      windSpeed: '8 м/с',
      precipitation: 'Дождь',
    },
    '12:00': {
      temperature: '18°C',
      windSpeed: '9 м/с',
      precipitation: 'Пасмурно',
    },
    '16:00': {
      temperature: '20°C',
      windSpeed: '10 м/с',
      precipitation: 'Гроза',
    },
    '20:00': {
      temperature: '16°C',
      windSpeed: '6 м/с',
      precipitation: 'Солнечно',
    },
    Пн: {
      temperature: '12°C',
      windSpeed: '4 м/с',
      precipitation: 'Переменная облачность',
    },
    Вт: {
      temperature: '14°C',
      windSpeed: '6 м/с',
      precipitation: 'Дождь',
    },
    Ср: {
      temperature: '16°C',
      windSpeed: '7 м/с',
      precipitation: 'Гроза',
    },
    Чт: {
      temperature: '18°C',
      windSpeed: '9 м/с',
      precipitation: 'Солнечно',
    },
    Пт: {
      temperature: '15°C',
      windSpeed: '5 м/с',
      precipitation: 'Облачно',
    },
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
          onClick={toggleView}
        >
          Сегодня
        </button>
        <button
          style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
          onClick={toggleView}
        >
          5 дней
        </button>
      </div>

     <div className={s.weatherTable}>
      
     </div>
    </div>
  );
};

export default WeatherTable;
