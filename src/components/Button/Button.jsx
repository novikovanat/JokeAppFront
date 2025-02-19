import css from './Button.module.css'

const Button = ({ onNext }) => {
  return <button className={css.nextButton} onClick={onNext}>Next</button>;
};

export default Button;
