import { Comment } from './Comment';
import styles from './CommentList.module.css';

export function CommentList({ comments, setComments }) {
  const removeComment = (commentToDelete) => {
    const commentWithoutDeleted = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentWithoutDeleted);
  };
  return (
    <div className={styles.commentList}>
      {comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            commentText={comment}
            removeComment={removeComment}
          />
        );
      })}
    </div>
  );
}
