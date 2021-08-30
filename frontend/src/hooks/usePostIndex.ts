import { useState } from 'react';
import axios from 'axios';

import { postsIndexUrl } from '../urls';

type Posts = {
  id: number;
  title: string;
  details: string;
  user_id: number;
  user: { name: string }
}

export const usePostIndex = () => {
  const [posts, setPosts] = useState<Array<Posts>>([])
  const getPosts = () => {
    axios
      .get(postsIndexUrl)
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(error => {
        console.log(error);
      })
  };
  return {getPosts,posts}
};