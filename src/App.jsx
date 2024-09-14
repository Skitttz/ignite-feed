import styles from './App.module.css';
import './styles/global.css';
import { Header } from './_components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}></div>
    </div>
  );
}

export default App;
