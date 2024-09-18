import { AvatarProps } from '@interfaces/avatar';
import styles from './Avatar.module.css';

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatarComment}
      src={src}
      alt="Avatar User"
    />
  );
}
