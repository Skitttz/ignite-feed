import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Avatar } from '../Avatar/Avatar';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import styles from './Post.module.css';
import { useState } from 'react';
import { PostProps } from '@interfaces/post';
import { Like } from '@components/Like/Like';

export function Post({ author, descriptions, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
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
        {descriptions.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <a
                key={index}
                className="bold"
                target="_blank"
                href={line.content}
              >
                {line.content}
              </a>
            );
          }
        })}
      </div>
      <div className={styles.containerLikePost}>
        <Like />
      </div>
      <CommentForm comments={comments} setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </article>
  );
}
