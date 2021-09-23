import {
  useState,
  useEffect,
  ChangeEvent,
  memo,
  VFC,
  useCallback,
} from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePostCreate } from "../../hooks/usePostCreate";
import { usePostUpdate } from "../../hooks/usePostUpdate";
import { usePostValidate } from "../../hooks/usePostValidate";

type Props = {
  postId?: any;
  postTitle: string;
  postDetails: string;
  actionName: string;
  actionButtonName: string;
};

export const PostForm: VFC<Props> = memo((props) => {
  const { postId, postTitle, postDetails, actionName, actionButtonName } =
    props;

  const {
    validatePostTitle,
    inputPostTitleError,
    validatePostDetails,
    inputPostDetailsError,
  } = usePostValidate();
  const { createPost, createLoading } = usePostCreate();
  const { updatePost, updateLoading } = usePostUpdate();

  const [inputPostTitle, setInputPostTitle] = useState<string>("");
  const [inputPostDetails, setInputPostDetails] = useState<string>("");

  const onChangeInputPostTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setInputPostTitle(title);
    validatePostTitle(title);
  };

  const onChangeInputPostDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const details = e.target.value;
    setInputPostDetails(details);
    validatePostDetails(details);
  };

  useEffect(() => {
    setInputPostTitle(postTitle);
    setInputPostDetails(postDetails);
  }, []);

  const onClickCreatePost = useCallback(() => {
    createPost(inputPostTitle, inputPostDetails);
  }, [inputPostTitle, inputPostDetails]);

  const onClickUpdatePost = useCallback(() => {
    updatePost(postId, inputPostTitle, inputPostDetails);
  }, [postId, inputPostTitle, inputPostDetails]);

  return (
    <Flex align="center" justify="center" height="50vh">
      <Box bg="white" w="2xl" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" py={4}>
          {actionName}
        </Heading>
        <Divider my={4}></Divider>
        <Stack spacing={4} py={4} px={6}>
          <p>タイトル</p>
          <Input
            placeholder="タイトル"
            value={inputPostTitle}
            onChange={onChangeInputPostTitle}
          />

          {inputPostTitleError && (
            <Text color="red">{inputPostTitleError}</Text>
          )}

          <p>詳細</p>
          <Input
            placeholder="詳細"
            value={inputPostDetails}
            onChange={onChangeInputPostDetails}
          />

          {inputPostDetailsError && (
            <Text color="red">{inputPostDetailsError}</Text>
          )}

          {actionName === "編集" && (
            <Button
              bg="blue.500"
              color="white"
              onClick={onClickUpdatePost}
              isLoading={updateLoading}
              isDisabled={!!inputPostTitleError || !!inputPostDetailsError}
            >
              {actionButtonName}
            </Button>
          )}

          {actionName === "新規作成" && (
            <Button
              bg="blue.500"
              color="white"
              onClick={onClickCreatePost}
              isLoading={createLoading}
              isDisabled={!!inputPostTitleError || !!inputPostDetailsError}
            >
              {actionButtonName}
            </Button>
          )}
        </Stack>
      </Box>
    </Flex>
  );
});
