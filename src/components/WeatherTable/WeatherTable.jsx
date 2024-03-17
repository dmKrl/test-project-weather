import { useState } from 'react';

const WeatherTable = () => {
  const [showToday, setShowToday] = useState(true);

  const handleToggle = () => {
    setShowToday(!showToday);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          style={{ borderRadius: '15px 15px 0 0' }}
          onClick={handleToggle}
        >
          Show Today
        </button>
        <button
          style={{ borderRadius: '15px 15px 0 0' }}
          onClick={handleToggle}
        >
          Show 5 Days
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Wind Speed</th>
            <th>Precipitation</th>
          </tr>
        </thead>
        <tbody>{/* Data rows here */}</tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
