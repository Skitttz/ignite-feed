import { Comment } from '@components/Post/Comment';
import styles from './CommentList.module.css';
import { CommentListProps } from '@interfaces/comment';

export function CommentList({ comments, setComments }: CommentListProps) {
  const removeComment = (commentToDelete: string) => {
    const commentWithoutDeleted = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentWithoutDeleted);
  };
  return (
    <div className={styles.commentList}>
      {comments?.map((comment, index) => {
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
