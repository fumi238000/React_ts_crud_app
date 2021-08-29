import { Flex, Box, Heading, Divider, Stack, Input, Button } from "@chakra-ui/react";
import { ChangeEvent, memo, useContext, useEffect, useState, VFC } from "react"
import { useUserPasswordUpdate } from "../../../hooks/useUserPasswordUpdate";
import { LoginUserContext } from "../../../providers/LoginUserProvider";
import { GoBackButton } from "../../atms/button/GoBackButton";

export const UserEditPage: VFC = memo(() => {
  // const [inputUserName, setInputUserName] = useState<string>('')
  // const onChangeInputUserName = (e: ChangeEvent<HTMLInputElement>) => setInputUserName(e.target.value);
  // const { signUp, loading } = useUserSignUp();
  // const onClickUserUpdate = () =>  signUp(inputEmail, inputPassword);
  // const [inputEmail, setinputEmail] = useState<string>("test@gmail.com")
  // const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => setinputEmail(e.target.value);

  const [inputUserPassword, setInputUserPassword] = useState<string>('')
  const onChangeInputUserPassword = (e: ChangeEvent<HTMLInputElement>) => setInputUserPassword(e.target.value);
  // const { loginUser } = useContext(LoginUserContext);
  const { userPasswordUpdate } = useUserPasswordUpdate();


  // useEffect(() => {
  //   setinputEmail(loginUser?.email);
  // },[])

  const onClickUserUpdate = () =>  {
    userPasswordUpdate(inputUserPassword)  
  }

  return (
    <>
    <GoBackButton/>
    <Flex align="center" justify="center" height="50vh">

      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" py={4}>ユーザー編集</Heading>
        <Divider my={4}></Divider>
        <Stack spacing={4} py={4} px={6}>
          {/* <p>ユーザーネーム</p>
          <Input placeholder="UserName"
            type="email"
            value={inputUserName}
            onChange={onChangeInputUserName}
          /> */}
          {/* <p>Email</p>
          <Input placeholder="Email"
            type="email"
            value={inputEmail}
            onChange={onChangeInputEmail}
          /> */}
          <p>パスワード</p>
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