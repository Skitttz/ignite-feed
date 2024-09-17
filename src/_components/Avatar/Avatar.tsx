import styles from './Avatar.module.css';

export function Avatar({ src, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatarComment}
      src={src}
      alt="Avatar User"
    />
  );
}
