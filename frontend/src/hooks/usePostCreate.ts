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
          alert("新規作成しました");
          // alert(`${data.title}を登録完了`);
        })
        .catch(error => {
          console.log(error);
          alert("作成できませんでした");
        });
}
