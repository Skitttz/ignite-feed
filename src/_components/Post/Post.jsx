import { Avatar } from '../Avatar/Avatar';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={'https://github.com/AldoWa.png'} />
          <div className={styles.authorInfo}>
            <strong className="block">Aldo Wanderley</strong>
            <span className="block text-sm leading-relax">
              Developer Senior
            </span>
          </div>
        </div>
        <time
          title="14 de setembro as 23:50"
          dateTime="2024-09-15 23:50"
          className="text-sm"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={`${styles.content} leading-relax`}>
        <p>👋 E aí, galera!</p>
        <p>
          Acabei de subir um projeto super legal 🚀 e, com isso, consegui uma
          vaga na gringa 🌍✈️.
        </p>
        <p>
          Acessa aí para mais detalhes:{' '}
          <a href="https://github.com/AldoWa/video-plataform" className="bold">
            Link
          </a>
        </p>
        <p>
          <a href="#">#NovoPost</a> <a href="#">#ToNaGringa</a>{' '}
          <a href="#">#Projeto</a>
        </p>
      </div>
      <CommentForm />
      <CommentList />
    </article>
  );
}
