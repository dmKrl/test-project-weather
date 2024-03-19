import { useContext, useState } from 'react';
import getWeather from '../../api/getWeather';
import s from './SearchForm.module.css';
import conditions from './../../conditions/conditions';
import ShowingSearchContext from '../../context/showingSearchContext';
import dataWeatherContext from '../../context/dataWeatherContext';
import showingErrorRequest from '../../context/showingErrorRequest';

const SearchForm = () => {
  const [cityName, setCityName] = useState('');
  const { changeIsShowing } = useContext(ShowingSearchContext);
  const { changeDataWeather } = useContext(dataWeatherContext);
  const { changeErrorRequest } = useContext(showingErrorRequest);

  function checkForErrorAndChangeData({ data }) {
    if (data?.error) {
      console.log(data?.error);
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
      console.log(data?.forecast.forecastday);

      // Реализация своих иконок для 5 дней
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

      //Отображаем полученные данные в карточке
      //Разметка для карточки
      const weatherData = {
        name: data?.location.name,
        country: data?.location.country,
        tempC: data?.current.temp_c,
        feelsLikeC: data?.current.feelslike_c,
        windMph: data?.current.wind_mph,
        precipMm: data?.current.precip_mm,
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
    const response = await getWeather(cityName);
    checkForErrorAndChangeData({ data: response });
    setCityName('');
  }

  return (
    <form className={s.searchForm}>
      <input
        className={s.searchInput}
        type="text"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
        placeholder="Введите название города"
      />
      <input
        className={s.searchSubmit}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
        value=""
      />
    </form>
  );
};

export default SearchForm;
