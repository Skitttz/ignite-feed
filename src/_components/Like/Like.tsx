import { ThumbsUp } from 'phosphor-react';
import styles from './Like.module.css';
import { useState } from 'react';

export function Like() {
  const [likeCount, setLikeCount] = useState(0);
  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };
  return (
    <button className={`flex ${styles.buttonLike}`} onClick={handleLikeComment}>
      <ThumbsUp /> Aplaudir <span>{likeCount}</span>
    </button>
  );
}
