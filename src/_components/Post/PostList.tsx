import { Post } from './Post';
import { usePosts } from '@contexts/PostContext';

export function PostList() {
  const { posts } = usePosts();
  return (
    <div>
      {posts.map((post) => {
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
  );
}
