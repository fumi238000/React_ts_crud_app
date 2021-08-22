import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import { postsIndexUrl } from '../../../urls';
import { TodoType } from '../../../types/api/post';
import { PostDelete } from '../../../hooks/usePostDelete';
// import { PostContext } from '../../../providers/PostProvider';


export const PostIndexPage = () => {
  const history = useHistory();
  const onClickPostEditPage = useCallback(() => history.push("/post/edit"),[history]);
  const onClickPostCreatePage = useCallback(() => history.push("/post/new"),[history]);

  //これを呼びたい！使いたい！
  // const { posts, setPosts } = useContext(PostContext);

  const [posts, setPosts] = useState<Array<TodoType>>([])

  useEffect(() => {
    axios.get<Array<TodoType>>(postsIndexUrl)
    .then(res => {
      setPosts(res.data);
    })
  },[setPosts])

  const onClickPostDelete = (postId: number) => {
    PostDelete(postId);
    setPosts(posts.filter(post => post.id !== postId))
  }

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
