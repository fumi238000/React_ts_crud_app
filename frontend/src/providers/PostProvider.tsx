import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Posts = {
  id: number;
  title: string;
  details: string;
  user_id: number;
  user: { name: string };
};

// TOOD: 型をきちんと定義すること。
type PostsContextType = {
  posts: Array<Posts>;
  setPosts: Dispatch<SetStateAction<Array<Posts>>>;
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
