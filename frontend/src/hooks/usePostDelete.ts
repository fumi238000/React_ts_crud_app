import axios from 'axios';

import { postsDeleteUrl } from '../urls';

export const usePostDelete = (postId: number) => {
  axios.delete(postsDeleteUrl(postId))
  .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
};
