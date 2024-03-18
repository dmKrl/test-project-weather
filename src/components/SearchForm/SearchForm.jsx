import { useContext, useState } from 'react';
import getWeather from '../../api/getWeather';
import s from './SearchForm.module.css';
import conditions from './../../conditions/conditions';
import ShowingSearchContext from '../../context/showingSearchContext';

const SearchForm = () => {
  const [cityName, setCityName] = useState('');
  const { changeIsShowing } = useContext(ShowingSearchContext);

  function checkForErrorAndChangeData({ data }) {
    if (data.error) {
      console.log(data.error);
    } else {
      // По номеру кода выбираем русский язык
      console.log(data.current.condition.code);
      const infoLang = conditions.find(
        (element) => element.code === data.current.condition.code
      );
      console.log(infoLang);

      // Реализация своих иконок
      const filePath =
        './pict/' + (data.current.is_day ? 'day' : 'night') + '/';
      const fileName =
        (data.current.is_day ? infoLang.day : infoLang.night) + '.png';
      const imgPath = filePath + fileName;

      //Отображаем полученные данные в карточке
      //Разметка для карточки
      const weatherData = {
        name: data.location.name,
        country: data.location.country,
        temp_c: data.current.temp_c,
        condition: data.current.is_day
          ? infoLang.languages[23]['day_text']
          : infoLang.languages[23]['night_text'],
        imgPath,
      };
      console.log(weatherData);
      changeIsShowing(true);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const response = await getWeather(cityName);
    checkForErrorAndChangeData({ data: response });
    console.log(response);
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
