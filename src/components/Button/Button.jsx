import styles from './Button.css'

export const Button = ({ btnClassName, btnTextClassName, buttonText }) => {
  return (
    <button className={`${btnClassName}`}>
      <span className={btnTextClassName}>{buttonText}</span>
    </button>
  );
};
