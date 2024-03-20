import { useContext, useState } from 'react';
import getWeather from '../../api/getWeather';
import s from './SearchForm.module.css';
import conditions from './../../conditions/conditions';
import ShowingSearchContext from '../../context/showingSearchContext';
import dataWeatherContext from '../../context/dataWeatherContext';
import showingErrorRequest from '../../context/showingErrorRequest';

const SearchForm = () => {
  const [cityName, setCityName] = useState('');
  const { changeIsShowing, changeIsShowingLoader } =
    useContext(ShowingSearchContext);
  const { changeDataWeather } = useContext(dataWeatherContext);
  const { changeErrorRequest } = useContext(showingErrorRequest);

  function checkForErrorAndChangeData({ data }) {
    changeIsShowingLoader(false);
    if (data?.error) {
      changeIsShowing(false);
      changeErrorRequest(true);
    } else {
      // По номеру кода выбираем русский язык
      const infoLang = conditions.find(
        (element) => element.code === data?.current.condition.code
      );

      // Реализация своих иконок для текущего дня
      const filePath =
        '/src/assets/images/' + (data?.current.is_day ? 'day' : 'night') + '/';
      const fileName =
        (data?.current.is_day ? infoLang.day : infoLang.night) + '.png';
      const imgPath = filePath + fileName;

      // Реализация своих иконок для 5 дней - измененный массив на неделю
      const weatherWeekData = data?.forecast.forecastday.map((dayWeek) => {
        // Изменяем основную иконку с API на кастомную
        const filePathWeek = '/src/assets/images/' + 'day' + '/';
        const infoLangWeek = conditions.find(
          (element) => element.code === dayWeek.day.condition.code
        );
        const fileNameWeek = infoLangWeek.day + '.png';
        const imgPathWeek = filePathWeek + fileNameWeek;
        dayWeek.imgPathWeek = imgPathWeek;
        dayWeek.conditionWeek = infoLangWeek.languages[23]['day_text'];
        return dayWeek; // Возвращаем измененный объект dayWeek
      });

      //Отображаем полученные данные в карточке для текущего дня
      //Разметка для карточки
      const weatherData = {
        name: data?.location.name,
        country: data?.location.country,
        tempC: data?.current.temp_c,
        feelsLikeC: data?.current.feelslike_c,
        windMph: data?.current.wind_mph,
        precipMm: data?.current.precip_mm,
        date: data?.forecast?.forecastday[0]?.date,
        condition: data?.current.is_day
          ? infoLang.languages[23]['day_text']
          : infoLang.languages[23]['night_text'],
        imgPath,
      };
      changeIsShowing(true);
      changeDataWeather({
        todayWeather: weatherData,
        weekWeather: weatherWeekData,
      });
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    changeErrorRequest(false);
    changeIsShowingLoader(true);
    changeIsShowing(false);
    const response = await getWeather(cityName);
    if (!response.location) {
      changeErrorRequest(true);
      changeIsShowingLoader(false);
      return;
    }
    checkForErrorAndChangeData({ data: response });
    setCityName('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const isValid = e.target.checkValidity();
      if (isValid) {
        onSubmit(e);
      }
    }
  }

  return (
    <form className={s.searchForm} onSubmit={onSubmit}>
      <input
        className={s.searchInput}
        type="text"
        value={cityName}
        onKeyDown={handleKeyDown}
        onChange={(event) => setCityName(event.target.value)}
        placeholder="Введите название города"
        required
      />
      <button className={s.searchSubmit} type="submit"></button>
    </form>
  );
};

export default SearchForm;
