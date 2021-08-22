// TODO: 後日ここで定義したstateを使いたい

import React, {ReactNode, useState, createContext  } from "react";
import { TodoType } from "../types/api/post";

export const PostContext = createContext({});

type PostType = {
  id?: number;
  // user_id: number;
  title?: string;
  details?: string;
  children?: ReactNode;
};

export const PostProvider = (props: PostType) => {
  const { children } = props;
  const [posts, setPosts] = useState<Array<TodoType>>([])

  return (
    <PostContext.Provider value= {{ posts, setPosts} }>
       {children}
    </PostContext.Provider>
  );
};