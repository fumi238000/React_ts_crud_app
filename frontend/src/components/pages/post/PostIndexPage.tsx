import React, { useEffect, useCallback, memo } from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { PostCard } from "../../organisms/post/PostCard";
import { usePostIndex } from "../../../hooks/usePostIndex";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PostIndexPage = memo(() => {
  const history = useHistory();
  const onClickPostCreatePage = useCallback(
    () => history.push("/posts/new"),
    [history]
  );
  const { getPosts, posts } = usePostIndex();
  // todo: postsを持っていない場合のみ取得する
  useEffect(() => getPosts(), []);

  return (
    <>
      <Heading fontSize="2xl" p={4}>
        投稿一覧
      </Heading>
      <Box textAlign="right" px={4} py={8} m={4}>
        <Button colorScheme="blue" onClick={onClickPostCreatePage}>
          新規作成
        </Button>
      </Box>
      {posts.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <PostCard
          key={post.id}
          postUserId={post.user_id}
          postId={post.id}
          postTitle={post.title}
          postDetails={post.details}
          postUserName={post.user.name}
        />
      ))}
    </>
  );
});
