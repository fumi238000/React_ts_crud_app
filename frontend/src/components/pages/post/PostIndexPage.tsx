/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from 'react';
import { Button, Box, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { PostCard } from '../../organisms/post/PostCard';
import { usePostIndex } from '../../../hooks/usePostIndex';

export const PostIndexPage = () => {
  const history = useHistory();
  const onClickPostCreatePage = useCallback(() => history.push("/posts/new"),[history]);
  const { getPosts, posts} = usePostIndex();
  // todo: postsを持っていない場合のみ取得する
  useEffect(() => getPosts(),[]);

  return (
      <>
        <Heading fontSize="2xl" p={4}>投稿一覧</Heading>
        <Box textAlign="right" px={4} py={8} m={4}>
          <Button colorScheme="blue" onClick={onClickPostCreatePage}>新規作成</Button>
        </Box>
        { posts.map((post) => (
          <PostCard
             postUserId={post.user_id}
             postId={post.id}
             postTitle={post.title}
             postDetails={post.details}
             postUserName={post.user.name}
          />
          ))}
      </>
  )
}
