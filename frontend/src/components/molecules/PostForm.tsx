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

type Props = {
  postId?: any;
  postTitle: string;
  postDetails: string;
  actionName: string;
  actionButtonName: string;
};

export const PostForm: VFC<Props> = memo((props) => {
  const maxTitleLength = 8
  const maxDetailsLength = 30

  const { postId, postTitle, postDetails, actionName, actionButtonName } =
    props;
  const [inputPostTitle, setInputPostTitle] = useState<string>("");
  const [inputPostDetails, setInputPostDetails] = useState<string>("");
  const [inputPostTitleError, setInputPostTitleError] = useState<string>("");
  const [inputPostDetailsError, setInputPostDetailsError] = useState<string>("");

  const onChangeInputPostTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setInputPostTitle(title);
    validatePostTitle(title)
    };

  const onChangeInputPostDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const details = e.target.value
    setInputPostDetails(details)
    validatePostDetails(details)
  };

  //TODO: カスタムフック化する
  const validatePostTitle =(inputPostTitle:string) => {
    let error = "";
    if ( !inputPostTitle) {
      error = "タイトルを入力してください";
    } else if ( inputPostTitle.length > maxTitleLength ) {
      error = `タイトルは${maxTitleLength}文字以下で入力してください`;
    }
    setInputPostTitleError(error)
  };

  //TODO: カスタムフック化する
  const validatePostDetails =(inputPostDetails:string) => {
    let error = "";
    if ( !inputPostDetails) {
      error = "詳細を入力してください";
    } else if ( inputPostDetails.length > maxDetailsLength ) {
      error = `詳細は${maxDetailsLength}文字以下で入力してください`;
    }
    setInputPostDetailsError(error)
  };

  const { createPost, createLoading } = usePostCreate();
  const { updatePost, updateLoading } = usePostUpdate();

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

          { inputPostTitleError &&
              <Text color="red">{inputPostTitleError}</Text>
          }

          <p>詳細</p>
          <Input
            placeholder="詳細"
            value={inputPostDetails}
            onChange={onChangeInputPostDetails}
          />

          { inputPostDetailsError &&
            <Text color="red">{inputPostDetailsError}</Text>
          }

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
