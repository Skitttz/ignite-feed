import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './CommentForm.module.css';
import { CommentFormProps } from '@interfaces/comment';

export function CommentForm({ comments, setComments }: CommentFormProps) {
  const [newCommentText, setNewCommentText] = useState('');
  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value);
  };
  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Este campo eh obrigatorio');
  };

  const isCommentEmpty = newCommentText.length === 0;

  return (
    <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
      <strong className="leading-relax">Deixe seu feedback</strong>
      <textarea
        placeholder="Deixe um comentario"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleCommentInvalid}
        required
      ></textarea>
      <footer>
        <button disabled={isCommentEmpty} type="submit">
          Comentar
        </button>
      </footer>
    </form>
  );
}
