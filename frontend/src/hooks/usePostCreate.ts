import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { postsCreateUrl } from '../urls';
import { useMessage } from './useMessage';

export const usePostCreate =() => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const createPost = (postTitle: string, postDetails: string) => {
    axios
      .post(postsCreateUrl, {
        user_id: 1,
        title: postTitle,
        details: postDetails,
      })
    .then(res => {
      console.log(res);
      // const { id } = res.data.id;
      showMessage({title: "投稿を作成しました", status: "success"})
      history.push("/posts");
    })
    .catch(error => {
      console.log(error);
      showMessage({ title: "作成に失敗しました", status: "error"})
    });
  };

  //TODO: ここで作成したPostのidを返して、無駄なAPI通信を省きたい
  return { createPost }
}
