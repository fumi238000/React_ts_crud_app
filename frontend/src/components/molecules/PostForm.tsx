import { useState, useEffect,ChangeEvent, memo, VFC } from "react";
import { Box, Button, Divider, Flex, Heading, Input, Stack  } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { PostCreate } from "../../hooks/usePostCreate";
import { PostUpdate } from "../../hooks/usePostUpdate";

type Props = {
  postId?: any;
  postTitle: string;
  postDetails: string;
  actionName: string;
  actionButtonName: string;
}

export const PostForm: VFC<Props> = memo((props) => {
  const { postId, postTitle, postDetails, actionName, actionButtonName } = props;
  const history = useHistory();
  const [inputPostTitle, setInputPostTitle] = useState('')
  const [inputPostDetails, setInputPostDetails] = useState('')
  const onChangeInputPostTitle = (e: ChangeEvent<HTMLInputElement>) => setInputPostTitle(e.target.value);
  const onChangeInputPostDetails = (e: ChangeEvent<HTMLInputElement>) => setInputPostDetails(e.target.value);

  useEffect(() => {
    setInputPostTitle(postTitle);
    setInputPostDetails(postDetails);
  },[postTitle, postDetails])

  const onClickCreatePost = () => {
    PostCreate(inputPostTitle,inputPostDetails);
    history.push("/posts");
  }

  const onClickUpdatePost = () => {
    console.log(postId, inputPostTitle, inputPostDetails);
    PostUpdate(postId, inputPostTitle, inputPostDetails)
    history.push("/posts");
  }

  return (
    <Flex align="center" justify="center" height="50vh">
    <Box bg="white" w="2xl" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" py={4}>
          { actionName }
        </Heading>
        <Divider my={4}></Divider>
        <Stack spacing={4} py={4} px={6}>
          <p>タイトル</p>
          <Input placeholder="タイトル"
               value={inputPostTitle}
               onChange={onChangeInputPostTitle}
          />
          <p>詳細</p>
          <Input placeholder="詳細"
               value={inputPostDetails}
               onChange={onChangeInputPostDetails}
          />
          { actionName === "編集" ? 
            <Button bg="blue.500" color="white" _hover={{ opacity: 0.7}} onClick={onClickUpdatePost}>
              {actionButtonName}
            </Button>
          :
          <Button bg="blue.500" color="white" _hover={{ opacity: 0.7}} onClick={onClickCreatePost}>
            {actionButtonName}
          </Button>
          }
        </Stack>
      </Box>
    </Flex>
  );
});