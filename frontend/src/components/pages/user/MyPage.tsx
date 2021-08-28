/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useContext, memo, VFC } from "react"
import { Box, Button, Flex, Heading } from "@chakra-ui/react"

import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { useUserLogOut } from "../../../hooks/useUserLogOut";

export const MyPage: VFC = memo(() => {
  const { loginUser } = useContext(LoginUserContext);
  const { logOut } = useUserLogOut();
  const onClickLogOut = () => logOut();

  return (
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading 
            as="h1"
            size="lg"
            textAlign="center"
            py={4}
          >
            マイページ
          </Heading>

          <Heading size="sm" textAlign="center" py={4}>
            ログインID：{loginUser?.userId}
          </Heading>

          <Box p={4} align="center">
            <Button onClick={onClickLogOut}>ログアウト</Button>
          </Box>
        </Box>
      </Flex>
    
  );
});