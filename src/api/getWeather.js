const apiKey = '85f3be2f272048baa1822810241803';

async function getWeather(city) {
  try {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const urlWeek = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    const response = await fetch(url);
    const responseWeek = await fetch(urlWeek);

    const data = await response.json();
    const dataWeek = await responseWeek.json();

    return data && dataWeek;
  } catch (error) {
    return new Error('Error fetch');
  }
}

export default getWeather;
