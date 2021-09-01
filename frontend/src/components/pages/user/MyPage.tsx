/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useContext, memo, VFC } from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"

import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { useUserLogOut } from "../../../hooks/useUserLogOut";
import { useHistory } from "react-router-dom";
import { useUserDelete } from "../../../hooks/useUserDelete";
import { GreenButton } from "../../atms/button/GreenButton";
import { RedButton } from "../../atms/button/RedButton";

export const MyPage: VFC = memo(() => {
  const history = useHistory();

  const { loginUser } = useContext(LoginUserContext);
  const { logOut } = useUserLogOut();
  const { userDelete} = useUserDelete();
  const onClickLogOut = () => logOut();
  const onClickUserEditPage = () => history.push("/user/edit");
  const onClickPasswordEditPage = () => history.push("/password");
  const onClickUserDelete = () => userDelete();

  return (
      <>
      <Flex align="center" justify="center" height="70vh">
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
          <Heading size="sm" textAlign="center" py={4}>
            Email：{loginUser?.email}
          </Heading>
          <Heading size="sm" textAlign="center" py={4}>
            ユーザーネーム：{loginUser?.name}
          </Heading>

          <GreenButton onClick={onClickUserEditPage} >ユーザー編集</GreenButton>
          <GreenButton onClick={onClickPasswordEditPage} >パスワード編集</GreenButton>
          <RedButton onClick={onClickLogOut}>ログアウト</RedButton>
          <RedButton onClick={onClickUserDelete}>このユーザーを削除</RedButton>
        </Box>
      </Flex>
      </>
    
  );
});