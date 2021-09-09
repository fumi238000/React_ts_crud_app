import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { PostType } from "../types/api/post";

// TOOD: 型をきちんと定義すること。
type PostsContextType = {
  posts: Array<PostType >;
  setPosts: Dispatch<SetStateAction<Array<PostType >>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PostContext = createContext<any>([]);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PostProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [posts, setPosts] = useState<Array<PostsContextType>>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
