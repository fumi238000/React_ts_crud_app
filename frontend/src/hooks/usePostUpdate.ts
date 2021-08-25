import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { postsUpdateUrl } from '../urls';
import { useMessage } from './useMessage';

export const usePostUpdate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const updatePost = (postId: number, postTitle: string, postDetals: string) => {
  axios.put(postsUpdateUrl(postId), {
    user_id: 1,
    title: postTitle,
    details: postDetals,
  })
  .then(res => {
      console.log(res);
      showMessage({title: "投稿を更新しました", status: "success"})
      history.push("/posts");
    })
    .catch(error => {
      console.log(error);
      showMessage({ title: "更新に失敗しました", status: "error"})
    });
  };
    return { updatePost }
};
