import axios from 'axios';

import { postsDeleteUrl } from '../urls';

export const PostDelete =(postId: number) => {
  axios.delete( postsDeleteUrl(postId))
  .then(res => {
      console.log(res);
      alert("削除しました");
    })
    .catch(error => {
      console.log(error);
      alert("削除できませんでした");
    });
}