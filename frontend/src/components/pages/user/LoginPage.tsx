import { useState, ChangeEvent,memo, VFC } from "react"
import { Box, Flex, Heading, Divider, Button, Input, Stack } from "@chakra-ui/react"

import { useUserLogin } from "../../../hooks/useUserLogin";

export const LoginPage: VFC = memo(() => {
  const [inputEmail, setinputEmail] = useState<string>('')
  const [inputPassword, setinputPassword] = useState<string>('')
  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => setinputEmail(e.target.value);
  const onChangeInputUserPassword = (e: ChangeEvent<HTMLInputElement>) => setinputPassword(e.target.value);
  const { login } = useUserLogin();

  const onClickLogin = () => {
    login(inputEmail, inputPassword);
  }

  return (
      <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center" py={4}>ログイン</Heading>
          <Divider my={4}></Divider>
          <Stack spacing={4} py={4} px={6}>
            <p>Email</p>
            <Input placeholder="Email"
                 value={inputEmail}
                 onChange={onChangeInputEmail}
            />
            <p>パスワード</p>
            <Input placeholder="パスワード"
                 type="password"
                 value={inputPassword}
                 onChange={onChangeInputUserPassword}
            />
            <Button bg="blue.500" color="white" _hover={{ opacity: 0.7}} onClick= {onClickLogin}>
              ログイン
            </Button>
          </Stack>
      </Box>
      </Flex>
    
  );
});