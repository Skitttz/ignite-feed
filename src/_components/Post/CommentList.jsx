import { Comment } from './Comment';
import styles from './CommentList.module.css';

export function CommentList() {
  return (
    <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
