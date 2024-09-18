import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './CommentForm.module.css';
import { CommentFormProps } from '@interfaces/comment';
import { handleSubmitInvalid, isEmptyForm } from '@utils/formSubmit';

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

  return (
    <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
      <strong className="leading-relax">Deixe seu feedback</strong>
      <textarea
        placeholder="Deixe um comentario"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleSubmitInvalid}
        required
      ></textarea>
      <footer>
        <button disabled={isEmptyForm(newCommentText)} type="submit">
          Comentar
        </button>
      </footer>
    </form>
  );
}
