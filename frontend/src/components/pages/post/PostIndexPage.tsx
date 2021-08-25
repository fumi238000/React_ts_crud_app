import React, { useEffect, useCallback } from 'react';
import { Button, Box, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { PostCard } from '../../organisms/post/PostCard';
import { usePostIndex } from '../../../hooks/usePostIndex';

export const PostIndexPage = () => {
  const history = useHistory();
  const onClickPostEditPage = useCallback(() => history.push("/posts/edit"),[history]);
  const onClickPostCreatePage = useCallback(() => history.push("/posts/new"),[history]);

  const { getPosts, posts} = usePostIndex();
  useEffect(() => getPosts(),[]);

  return (
      <>
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
