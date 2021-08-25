import axios from 'axios';

import { postsDeleteUrl } from '../urls';

export const PostDelete = (postId: number) => {
  axios.delete(postsDeleteUrl(postId))
  .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
};
