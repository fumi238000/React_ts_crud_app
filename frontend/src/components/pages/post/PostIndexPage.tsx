import React, { useState, useEffect, useCallback, FC} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import { postsIndexUrl } from '../../../urls';
import { TodoType } from '../../../types/api/post';
import { PostDelete } from '../../../hooks/usePostDelete';

export const PostIndexPage: FC = () => {
  const history = useHistory();
  const onClickPostEditPage = useCallback(() => history.push("/post/edit"),[history]);
  const onClickPostCreatePage = useCallback(() => history.push("/post/new"),[history]);

  const [posts, setPosts] = useState<Array<TodoType>>([])

  const onClickPostDelete = (postId: number) => {
    PostDelete(postId);
    setPosts(posts.filter(post => post.id !== postId))
  }

  useEffect(() => {
    axios.get<Array<TodoType>>(postsIndexUrl)
    .then(res => {
      setPosts(res.data);
    })
  },[])

  return (
      <div>
        <h1>TODOリスト一覧画面</h1>
        <button onClick={onClickPostCreatePage}>新規作成</button>
        { posts.map((post) => (
            // TODO: リファクタリングすること
            <div key={post.id}>
              <p>タイトル：{post.title}</p>
              <p>詳細：{post.details}</p>
              <div>
                <button onClick={onClickPostEditPage}>編集</button>
                <button onClick= {() => {onClickPostDelete(post.id)} }>削除</button>
              </div>
            </div>
          ))}
      </div>
  )
}
