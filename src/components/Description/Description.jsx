import s from './Description.module.css';
const Description = () => {
  return (
    <div className={s.description}>
      <h1 className={s.descriptionHeading}>Погода в странах мира</h1>
      <p className={s.descriptionText}>Смотрите погоду в интересующем городе</p>
    </div>
  );
};

export default Description;
