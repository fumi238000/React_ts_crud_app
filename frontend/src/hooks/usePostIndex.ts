import { useState } from 'react';
import axios from 'axios';

import { postsIndexUrl } from '../urls';
import { TodoType } from '../types/api/post';

export const usePostIndex = () => {
  const [posts, setPosts] = useState<Array<TodoType>>([])

  const getPosts = () => {
    axios
      .get<Array<TodoType>>(postsIndexUrl)
      .then(res => {
        setPosts(res.data)
      })
    .then(res => {
    })
  };

  return {getPosts,posts}
};