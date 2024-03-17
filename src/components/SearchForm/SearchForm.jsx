import s from './SearchForm.module.css';
const SearchForm = () => {
  return (
    <form className={s.searchForm}>
      <input
        className={s.searchInput}
        type="text"
        placeholder="Введите название города"
      />
      <input className={s.searchSubmit} type="submit" value="" />
    </form>
  );
};

export default SearchForm;
