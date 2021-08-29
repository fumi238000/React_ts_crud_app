import { Flex, Box, Heading, Divider, Stack, Input, Button } from "@chakra-ui/react";
import { ChangeEvent, memo, useContext, useEffect, useState, VFC } from "react"
import { useHistory } from "react-router-dom";
import { useUserPasswordUpdate } from "../../../hooks/useUserPasswordUpdate";
import { useUserUpdate } from "../../../hooks/useUserUpdate";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { GoBackButton } from "../../atms/button/GoBackButton";

export const UserEditPage: VFC = memo(() => {
  const { loginUser } = useContext(LoginUserContext);
  //todo: 初期値をログインユーザーにしたい。
  // ここにログインユーザーの情報を取得するカスタムフックを追加するか？

  //name
  const [inputUserName, setInputUserName] = useState<string>("")
  const onChangeInputUserName = (e: ChangeEvent<HTMLInputElement>) => setInputUserName(e.target.value);
  const history = useHistory();

  //email
  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => setinputEmail(e.target.value);
  const [inputEmail, setinputEmail] = useState<string>('')
  // const userEmail = loginUser?.email
  // useEffect(() => { setinputEmail(inputEmail)},[])

  //password
  const [inputUserPassword, setInputUserPassword] = useState<string>('')
  const onChangeInputUserPassword = (e: ChangeEvent<HTMLInputElement>) => setInputUserPassword(e.target.value);
  const { userUpdate } = useUserUpdate();

  //更新ボタン
  const onClickUserUpdate = () =>  {
    userUpdate(inputUserName,inputEmail);
    // userPasswordUpdate(inputUserPassword);
    history.push("/posts");
  }

  return (
    <>
    <GoBackButton/>
    <Flex align="center" justify="center" height="50vh">

      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" py={4}>ユーザー編集</Heading>
        <Divider my={4}></Divider>
        <Stack spacing={4} py={4} px={6}>
          <p>ユーザーネーム</p>
          <Input placeholder="UserName"
            type="text"
            value={inputUserName}
            onChange={onChangeInputUserName}
          />
          <p>新しいEmail</p>
          <Input placeholder="Email"
            type="email"
            value={inputEmail}
            onChange={onChangeInputEmail}
          />
          <p>新しいパスワード</p>
          <Input placeholder="パスワード"
            type="password"
            value={inputUserPassword}
            onChange={onChangeInputUserPassword}
          />
          <Button
            bg="blue.500"
            color="white"
            _hover={{ opacity: 0.7}}
            onClick= {onClickUserUpdate}
            // isLoading = {loading}
            // isDisabled = {inputUserName === '' || inputEmail === ''}
            >
            更新する
          </Button>
        </Stack>
      </Box>
    </Flex>
    </>
  );
});

function userPasswordUpdate(inputUserPassword: string) {
  throw new Error("Function not implemented.");
}
