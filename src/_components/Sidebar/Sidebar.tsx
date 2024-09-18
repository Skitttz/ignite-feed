import styles from './Sidebar.module.css';
import bgSidebar from '@assets/bg-sidebar.jpg';
import avatarProfile from '@assets/avatar-profile.jpg';
import { Avatar } from '@components/Avatar/Avatar';
import Button from '@components/Button/Button';
import { PencilLine, NotePencil } from 'phosphor-react';
import { useModal } from '../../hooks/useModal';
import { PostForm } from '@components/Post/PostForm/PostForm';
import { Modal } from '@components/Modal/Modal';
import { profileUser } from '@utils/constantsUser';

export function Sidebar() {
  const { handleOpenModal, visibleModal, handleCloseModal } = useModal();
  return (
    <aside className={styles.sidebar}>
      <img src={bgSidebar} className={styles.cover} alt="Background Profile" />
      <div className={styles.profile}>
        <Avatar src={avatarProfile} />
        <strong className="text-base leading-relax">{profileUser.name}</strong>
        <span className="text-sm leading-relax">{profileUser.role}</span>
      </div>
      <footer>
        <Button
          Icon={PencilLine}
          text="Editar seu Perfil"
          typeClass="primary"
        />
        <Button
          Icon={NotePencil}
          text="Criar Post"
          typeClass="secondary"
          onClick={handleOpenModal}
        />
        {visibleModal && (
          <Modal
            children={<PostForm handleCloseModal={handleCloseModal} />}
            onClose={handleCloseModal}
          />
        )}
      </footer>
    </aside>
  );
}
