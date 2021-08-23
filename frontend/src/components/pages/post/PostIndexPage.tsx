import React, { useState, useEffect, useCallback } from 'react';
import { Button, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import { postsIndexUrl } from '../../../urls';
import { TodoType } from '../../../types/api/post';
import { PostDelete } from '../../../hooks/usePostDelete';
import { PostCard } from '../../organisms/post/PostCard';

export const PostIndexPage = () => {
  const history = useHistory();
  const onClickPostEditPage = useCallback(() => history.push("/posts/edit"),[history]);
  const onClickPostCreatePage = useCallback(() => history.push("/posts/new"),[history]);

  //これを呼びたい！使いたい！
  // const { posts, setPosts } = useContext(PostContext);

  const [posts, setPosts] = useState<Array<TodoType>>([])

  useEffect(() => {
    axios.get<Array<TodoType>>(postsIndexUrl)
    .then(res => {
      setPosts(res.data);
    })
  },[setPosts])

  // const onClickPostDelete = (postId: number) => {
  //   PostDelete(postId);
  //   setPosts(posts.filter(post => post.id !== postId))
  // }

  return (
      <div>
        <h1>TODOリスト一覧画面</h1>
        <Box textAlign="right" px={4} py={8} m={4}>
          <Button colorScheme="blue" onClick={onClickPostCreatePage}>新規作成</Button>
        </Box>
        { posts.map((post) => (
             <PostCard   postId={post.id} postTitle={post.title} postDetails={post.details} />
            //     <Button colorScheme="green" onClick={onClickPostEditPage}>編集</Button>
            //     <Button colorScheme= "red" onClick= {() => {onClickPostDelete(post.id)} }>削除</Button>
          ))}
      </div>
  )
}
