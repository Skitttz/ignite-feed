import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';
import avatarProfile from '../../assets/avatar-profile.jpg';
import { useState } from 'react';
import { CommentProps } from '@interfaces/comment';

export function Comment({ commentText, removeComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };
  const handleDeleteComment = () => {
    removeComment(commentText);
  };
  return (
    <div className={`flex ${styles.comment}`}>
      <Avatar hasBorder={false} src={avatarProfile} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className="flex">
            <div className={`flex ${styles.authorAndTime}`}>
              <strong className="text-sm leading-relax">Skittz</strong>
              <time
                title="15 de setembro as 11:40"
                dateTime="2024-09-15 11:40"
                className="text-xs leading-relax"
              >
                Cerca de 1h atrás
              </time>{' '}
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{commentText}</p>
        </div>
        <footer>
          <button className="flex" onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
