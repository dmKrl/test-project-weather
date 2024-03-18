/* eslint-disable react/prop-types */
import s from './Description.module.css';
const Description = ({ isShowingInput }) => {
  return (
    <div className={s.description}>
      {isShowingInput ? (
        <>
          <h1 className={s.descriptionHeading}>Погода в городе Владивосток</h1>
        </>
      ) : (
        <>
          <h1 className={s.descriptionHeading}>Погода в странах мира</h1>
          <p className={s.descriptionText}>
            Смотрите погоду в интересующем городе
          </p>
        </>
      )}
    </div>
  );
};

export default Description;
