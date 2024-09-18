import Button from '@components/Button/Button';
import styles from './PostForm.module.css';
import {
  formatPostSubmit,
  generateDateNowFormatted,
  handleSubmitInvalid,
  isEmptyForm,
} from '@utils/formSubmit';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { PostFormProps, PostProps } from '@interfaces/post';
import { useToast } from '@contexts/Toast/ToastContext';
import { usePosts } from '@contexts/PostContext';
import { generateUniqueID } from '@utils/generateID';
import { profileUser } from '@utils/constantsUser';

export function PostForm({ handleCloseModal }: PostFormProps) {
  const [textContent, setTextContent] = useState<string>('');
  const [isSuccess, setIsSucess] = useState<boolean>(false);
  const { posts, addPost } = usePosts();
  const { showToast } = useToast();
  const handleNewPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
  };
  const handleCreateNewPost = (event: FormEvent) => {
    event.preventDefault();
    try {
      const idNewPost = generateUniqueID(posts);
      const formattedContentPost = formatPostSubmit(textContent);
      const publishedAt = generateDateNowFormatted();
      const newPost: PostProps = {
        id: idNewPost,
        author: {
          avatarUrl: profileUser.avatar,
          name: profileUser.name,
          role: profileUser.role,
        },
        descriptions: formattedContentPost,
        publishedAt: publishedAt,
      };
      addPost(newPost);
      setIsSucess(true);
    } catch (error) {
      if (!isSuccess && isEmptyForm(textContent)) {
        return showToast(
          'Ops! Erro ao criar a postagem, tente novamente.',
          'error',
        );
      }
    }
  };
  useEffect(() => {
    if (isSuccess) {
      handleCloseModal();
      return showToast('Post Criado com Sucesso!', 'success');
    }
  }, [isSuccess, handleCloseModal, posts]);
  return (
    <>
      <div className={styles.containerPostForm}>
        <form className={styles.contentPostForm} onSubmit={handleCreateNewPost}>
          <textarea
            name="contentPost"
            placeholder="Compartilhe seus pensamentos..."
            id=""
            onChange={handleNewPostChange}
            onInvalid={handleSubmitInvalid}
          ></textarea>
          <Button
            disabled={isEmptyForm(textContent)}
            typeClass="primary"
            text="Enviar Postagem"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
