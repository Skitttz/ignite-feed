import { useState } from 'react';
import styles from './CommentForm.module.css';

export function CommentForm({ comments, setComments }) {
  const [newCommentText, setNewCommentText] = useState('');
  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
  };
  const handleCreateNewComment = (event) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleCommentInvalid = (event) => {
    event.target.setCustomValidity('Este campo eh obrigatorio');
  };

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
        <button type="submit">Comentar</button>
      </footer>
    </form>
  );
}
