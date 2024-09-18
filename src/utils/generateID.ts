import { PostProps } from "@interfaces/post";

export function generateUniqueID(data: PostProps[]){
  let id;
  const idExisted = data.map(item => item.id); 
  
  do {
    id = Math.floor(Math.random() * 100); 
  } while (idExisted.includes(id));
  return id;
}
