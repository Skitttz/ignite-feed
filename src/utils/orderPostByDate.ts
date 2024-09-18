import { PostProps } from "@interfaces/post";

export function orderPostByDate(Posts: PostProps[]){
  Posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return Posts;
}