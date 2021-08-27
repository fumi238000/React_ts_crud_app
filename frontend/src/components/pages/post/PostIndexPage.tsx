/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from 'react';
import { Button, Box, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { PostCard } from '../../organisms/post/PostCard';
import { usePostIndex } from '../../../hooks/usePostIndex';
// import { LoginUserContext } from '../../../providers/LoginUserProvider';

export const PostIndexPage = () => {
  const history = useHistory();
  const onClickPostCreatePage = useCallback(() => history.push("/posts/new"),[history]);
  // const { loginUser  } = useContext(LoginUserContext);
  const { getPosts, posts} = usePostIndex();
  useEffect(() => getPosts(),[]);

  return (
      <>
        {/* <p>ログインID：{loginUser?.userId}</p>
        <p>ログインID：{loginUser?.client}</p>
        <p>ログインID：{loginUser?.uid}</p>
        <p>ログインID：{loginUser?.accessToken}</p> */}

        <Heading fontSize="2xl" p={4}>投稿一覧</Heading>
        <Box textAlign="right" px={4} py={8} m={4}>
          <Button colorScheme="blue" onClick={onClickPostCreatePage}>新規作成</Button>
        </Box>
        { posts.map((post) => (
          <PostCard
             postId={post.id}
             postTitle={post.title}
             postDetails={post.details}
          />
          ))}
      </>
  )
}
