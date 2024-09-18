import styles from './Button.module.css';
import { ButtonProps } from '@interfaces/button';

export default function Button({
  text,
  typeClass,
  Icon,
  onClick,
  disabled = false,
}: ButtonProps) {
  let buttonClass = '';
  switch (typeClass) {
    case 'primary':
      buttonClass = styles.primary;
      break;
    case 'secondary':
      buttonClass = styles.secondary;
      break;
    default:
      buttonClass = styles.default;
      break;
  }

  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={20} />}
      {text}
    </button>
  );
}
