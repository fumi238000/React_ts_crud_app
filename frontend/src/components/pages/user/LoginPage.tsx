import { useState, ChangeEvent, memo, VFC } from "react";
import { Box, Flex, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { useUserLogIn } from "../../../hooks/useUserLogin";
import { Link } from "react-router-dom";
import { BlueButton } from "../../atms/button/LoginButton";

export const LoginPage: VFC = memo(() => {
  const [inputEmail, setinputEmail] = useState<string>("");
  const [inputPassword, setinputPassword] = useState<string>("");
  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setinputEmail(e.target.value);
  const onChangeInputUserPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setinputPassword(e.target.value);
  const { logIn, loading } = useUserLogIn();

  const onClickLogin = () => {
    logIn(inputEmail, inputPassword);
  };

  return (
    <Flex align="center" justify="center" height="90vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" py={4}>
          ログイン
        </Heading>
        <Divider my={4}></Divider>
        <Stack spacing={4} py={4} px={6}>
          <p>Email</p>
          <Input
            placeholder="Email"
            type="email"
            value={inputEmail}
            onChange={onChangeInputEmail}
          />
          <p>パスワード</p>
          <Input
            placeholder="パスワード"
            type="password"
            value={inputPassword}
            onChange={onChangeInputUserPassword}
          />
          <BlueButton
            onClick={onClickLogin}
            loading={loading}
            inputEmail={inputEmail}
            inputPassword={inputPassword}
          >
            ログイン
          </BlueButton>
          <Box pt={4} align="center">
            <Link to="/signup">新規作成する</Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
});
