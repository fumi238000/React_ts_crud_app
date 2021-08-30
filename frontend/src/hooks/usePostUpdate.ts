import axios from 'axios';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginUserContext } from '../providers/LoginUserProvider';

import { postsUpdateUrl } from '../urls';
import { useMessage } from './useMessage';

export const usePostUpdate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(LoginUserContext);

  const updatePost = (postId: number, postTitle: string, postDetals: string) => {
    setLoading(true)

    axios
      .put(postsUpdateUrl(postId), {
      title: postTitle,
      details: postDetals,
      'uid': loginUser?.uid,
      'access-token': loginUser?.accessToken,
      'client': loginUser?.client,
    })
    .then(res => {
      console.log(res);
      showMessage({title: "投稿を更新しました", status: "success"})
      setLoading(false)
      history.push("/posts");
    })
    .catch(error => {
      console.log(error);
      setLoading(false)
      showMessage({ title: "更新に失敗しました", status: "error"})
    });
  };
    return { updatePost, loading }
};
