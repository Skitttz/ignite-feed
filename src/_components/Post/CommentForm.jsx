import styles from './CommentForm.module.css';

export function CommentForm() {
  return (
    <form className={styles.commentForm}>
      <strong className="leading-relax">Deixe seu feedback</strong>
      <textarea placeholder="Deixe um comentario"></textarea>
      <footer>
        <button type="submit">Comentar</button>
      </footer>
    </form>
  );
}
