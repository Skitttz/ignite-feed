import styles from './App.module.css';
import './styles/index.css';
import { Header } from './_components/Header/Header';
import { Sidebar } from './_components/Sidebar/Sidebar';
import { Post } from './_components/Post/Post';
import Posts from './db.json';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          {Posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.descriptions}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
