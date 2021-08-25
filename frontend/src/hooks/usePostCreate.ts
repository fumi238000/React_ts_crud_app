import axios from 'axios';

import { postsCreateUrl } from '../urls';

export const PostCreate =(title: string, details: string) => {
  //TODO: できれば以下の書き方で実装したい！
  // const data = {title: title, details: details,user_id: 1 }
  axios.post(postsCreateUrl, {
    title: title,
    details: details,
    user_id: 1
  })
  .then(res => {
    console.log(res);
    window.location.reload() //TODO: 将来stateに置き換える

    })
    .catch(error => {
      console.log(error);
    });
}
