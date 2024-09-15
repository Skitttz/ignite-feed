import styles from './App.module.css';
import './styles/index.css';
import { Header } from './_components/Header/Header';
import { Sidebar } from './_components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
