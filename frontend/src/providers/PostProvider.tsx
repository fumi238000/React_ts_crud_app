/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { PostType } from "../types/api/post";

type PostsContextType = {
  posts: PostType;
  setPosts: Dispatch<SetStateAction<PostType>>;
};

//暫定

export const PostContext = createContext<any>([]);
//TODO: なぜ、以下のようのに定義できないのか明らかにすること
// export const PostContext = createContext<Array<PostsContextType>>([]);

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
