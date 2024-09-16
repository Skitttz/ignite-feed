import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from '../Avatar/Avatar';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Que post bacana! 😎👍✨']);
  const publishedDateFormat = format(
    publishedAt,
    "dd 'de' LLLL 'as' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong className="block">{author.name}</strong>
            <span className="block text-sm leading-relax">{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormat}
          dateTime="2024-09-15 23:50"
          className="text-sm"
        >
          {publishedDateToNow}
        </time>
      </header>
      <div className={`${styles.content} leading-relax`}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <a key={index} className="bold" href="">
                {line.content}
              </a>
            );
          }
        })}
      </div>
      <CommentForm comments={comments} setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </article>
  );
}
