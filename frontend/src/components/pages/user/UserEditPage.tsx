import { Flex, Box, Heading, Divider, Stack, Input, Button } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react"
import { useUserUpdate } from "../../../hooks/useUserUpdate";
import { GoBackButton } from "../../atms/button/GoBackButton";

export const UserEditPage: VFC = memo(() => {
  const { userUpdate, loading } = useUserUpdate();
  //todo: 初期値をログインユーザーにしたい。
  // ここにログインユーザーの情報を取得するカスタムフックを追加するか？

  //name
  const [inputUserName, setInputUserName] = useState<string>("")
  const onChangeInputUserName = (e: ChangeEvent<HTMLInputElement>) => setInputUserName(e.target.value);

  //email
  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => setinputEmail(e.target.value);
  const [inputEmail, setinputEmail] = useState<string>('')

  //更新ボタン
  const onClickUserUpdate = () =>  {
    userUpdate(inputUserName,inputEmail);
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
          <Button
            bg="blue.500"
            color="white"
            onClick= {onClickUserUpdate}
            isLoading = {loading}
            isDisabled = {inputUserName === '' || inputEmail === ''}
            >
            更新する
          </Button>
        </Stack>
      </Box>
    </Flex>
    </>
  );
});