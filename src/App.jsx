import styles from './App.module.css';
import './styles/index.css';
import { Header } from './_components/Header/Header';
import { Sidebar } from './_components/Sidebar/Sidebar';
import { Post } from './_components/Post/Post';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </div>
  );
}

export default App;
