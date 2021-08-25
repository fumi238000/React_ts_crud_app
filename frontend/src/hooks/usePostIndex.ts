import { useState } from 'react';
import axios from 'axios';

import { postsIndexUrl } from '../urls';
import { TodoType } from '../types/api/post';
import { useMessage } from './useMessage';

export const usePostIndex = () => {
  const { showMessage } = useMessage();
  const [posts, setPosts] = useState<Array<TodoType>>([])

  const getPosts = () => {
    axios
      .get<Array<TodoType>>(postsIndexUrl)
      .then(res => {
        setPosts(res.data)
      })
    .then(res => {
      // showMessage({ title: "投稿データを取得しました", status: "success"})
    })
  };

  return {getPosts,posts}
};