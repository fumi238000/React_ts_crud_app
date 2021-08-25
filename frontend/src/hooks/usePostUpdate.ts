import axios from 'axios';

import { postsUpdateUrl } from '../urls';

// type Props = {
//   postId: number;
//   postTitle: string;
//   postDetals: string;
// }

export const PostUpdate = (postId: number, postTitle: string, postDetals: string) => {

  axios.put(postsUpdateUrl(postId), {
    title: postTitle,
    details: postDetals,
    user_id: 1
  })
  .then(res => {
      console.log(res);
      window.location.reload() ;
    })
    .catch(error => {
      console.log(error);
    });
}
