import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <div className={s.notFoundTitle}>
        <h2 className={s.notFoundHeading}>404</h2>
        <img
          src="/src/assets/images/icons/norfound.svg"
          alt="not-found-img-rain"
        />
      </div>
      <p className={s.notFoundText}>
        Что-то пошло не так, попробуйте перезагрузить страницу или вернуться на
        главную
      </p>
      <a href="/">Вернуться на главную</a>
    </div>
  );
};

export default NotFound;
