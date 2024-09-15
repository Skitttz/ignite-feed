import styles from './Sidebar.module.css';
import bgSidebar from '../../assets/bg-sidebar.jpg';
import avatarProfile from '../../assets/avatar-profile.jpg';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={bgSidebar} className={styles.cover} alt="Background Profile" />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src={avatarProfile}
          alt="Avatar Profile"
        />
        <strong className="text-base leading-relax">Skittz</strong>
        <span className="text-sm leading-relax">Web Developer</span>
      </div>
      <footer>
        <a className="bold" href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
