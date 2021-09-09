import { memo, useCallback, useContext, VFC } from "react";
import { useHistory } from "react-router";
import { Box, Button, Flex, Heading, Divider, Stack } from "@chakra-ui/react";
import { usePostDelete } from "../../../hooks/usePostDelete";
import { LoginUserContext } from "../../../providers/LoginUserProvider";

type Props = {
  postUserId: number;
  postId: number;
  postTitle: string;
  postDetails: string;
  postUserName: string;
};

export const PostCard: VFC<Props> = memo((props) => {
  const { postId, postTitle, postDetails, postUserName, postUserId } = props;
  const { loginUser } = useContext(LoginUserContext);
  const { deletePost } = usePostDelete();

  const history = useHistory();
  const onClickPostEditPage = useCallback(() => {
    history.push({
      pathname: `/posts/${postId}`,
      state: { postTitle, postDetails },
    });
  }, []);

  const onClickPostDelete = useCallback((postId: number) => {
    deletePost(postId);
  }, []);

  return (
    <div key={postId}>
      <Flex align="center" justify="center" width="100%">
        <Box bg="white" w="4xl" p={4} m={4} borderRadius="md" shadow="md">
          <Heading as="h3" size="md" textAlign="center" py={2}>
            {postTitle}
          </Heading>
          <Heading as="h3" size="xs" textAlign="center" py={2}>
            投稿者：{postUserName}
          </Heading>
          <Divider my={4}></Divider>
          <Stack spacing={4} py={8} px={8}>
            <Heading size="sm" textAlign="left" px={10}>
              {postDetails}
            </Heading>
            {postUserId === loginUser?.userId && (
              <Box textAlign="right">
                <Button
                  bg="green.500"
                  color="white"
                  _hover={{ opacity: 0.7 }}
                  m={1}
                  onClick={onClickPostEditPage}
                >
                  編集
                </Button>
                <Button
                  bg="red.500"
                  color="white"
                  _hover={{ opacity: 0.7 }}
                  m={1}
                  onClick={() => {
                    onClickPostDelete(postId);
                  }}
                >
                  削除
                </Button>
              </Box>
            )}
          </Stack>
        </Box>
      </Flex>
    </div>
  );
});
