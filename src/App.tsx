import styles from './App.module.css';
import './styles/index.css';
import { Header } from '@components/Header/Header';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { PostList } from '@components/Post/PostList';
import { PostProviders } from '@providers/PostProviders';
import { ToastProviders } from '@providers/ToastProviders';

function App() {
  return (
    <PostProviders>
      <ToastProviders>
        <div>
          <Header />
          <div className={styles.wrapper}>
            <Sidebar />
            <PostList />
          </div>
        </div>
      </ToastProviders>
    </PostProviders>
  );
}

export default App;
