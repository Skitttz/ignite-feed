import styles from './App.module.css';
import './styles/index.css';
import { Header } from '@components/Header/Header';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { Post } from '@components/Post/Post';
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
                id={post.id}
                author={post.author}
                descriptions={post.descriptions}
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
