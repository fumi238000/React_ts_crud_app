import { memo, VFC } from "react";
import { useHistory } from "react-router";
import {Box, Button, Flex, Heading, Divider, Stack} from "@chakra-ui/react";
import { PostDelete } from "../../../hooks/usePostDelete";

type Props = {
  postId: number;
  postTitle: string;
  postDetails: string;
};

export const PostCard: VFC<Props> = memo((props) => {
   const { postId, postTitle, postDetails } = props;
   const history = useHistory();

   const onClickPostEditPage = () => {
     history.push({
       pathname: `/posts/${postId}`,
       state: {postTitle,postDetails}
      });
    };

   const onClickPostDelete = (postId: number) => {
    PostDelete(postId);
    window.location.reload()
    // setPosts(posts.filter(post => post.id !== postId)) //将来的にこちらに置き換える
  }

   return (
   <div key = {postId}>
     <Flex align="center" justify="center" width="100%">
     <Box bg="white" w="4xl" p={4} m={4} borderRadius="md" shadow="md" >
      <Heading as="h3" size="md" textAlign="center" py={4}>{postTitle}</Heading>
      <Divider my={4}></Divider>
      <Stack spacing={4} py={4} px={6}>
        <Heading size="sm" textAlign="left" px={10}>{postDetails}</Heading>
        <Box textAlign="right">
          <Button bg="green.500" color="white" _hover={{ opacity: 0.7}} m={1} onClick={onClickPostEditPage}>編集</Button>
          <Button bg="red.500" color="white" _hover={{ opacity: 0.7}} m={1} onClick= {() => {onClickPostDelete(postId)}}>削除</Button>
        </Box>
      </Stack>
    </Box>
    </Flex>
  </div>
   )
});
