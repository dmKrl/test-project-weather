import { useState } from 'react';

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

      <table>
        <thead>
          <tr>
            <th></th>
            {timeIntervals.map((interval) => (
              <th key={interval}>{interval}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            
            'Температура воздуха',
            'Скорость ветра',
            'Осадки',
          ].map((label, index) => (
            <tr key={index}>
              <td>{label}</td>
              {timeIntervals.map((interval) => (
                <td key={interval}>{data[interval][label.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
