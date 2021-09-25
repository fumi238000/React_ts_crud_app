import { useState, ChangeEvent, memo, VFC } from "react";
import {
  Box,
  Flex,
  Heading,
  Divider,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useUserLogIn } from "../../../hooks/useUserLogin";
import { Link } from "react-router-dom";
import { LoginButton } from "../../atms/button/LoginButton";
import { useUserValidate } from "../../../hooks/useUserValidate";

export const LoginPage: VFC = memo(() => {
  const [inputEmail, setinputEmail] = useState<string>("");
  const [inputPassword, setinputPassword] = useState<string>("");

  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setinputEmail(email);
    validateUserEmail(email);
  };

  const onChangeInputUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setinputPassword(password);
    validateUserPassword(password);
  };

  const { logIn, loading } = useUserLogIn();
  const {
    validateUserEmail,
    inputEmailError,
    validateUserPassword,
    inputPasswordError,
  } = useUserValidate();

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
          {inputEmailError && <Text color="red">{inputEmailError}</Text>}

          <p>パスワード</p>
          <Input
            placeholder="パスワード"
            type="password"
            value={inputPassword}
            onChange={onChangeInputUserPassword}
          />
          {inputPasswordError && <Text color="red">{inputPasswordError}</Text>}

          <LoginButton
            onClick={onClickLogin}
            loading={loading}
            inputEmailError={inputEmailError}
            inputPasswordError={inputPasswordError}
          >
            ログイン
          </LoginButton>
          <Box pt={4} align="center">
            <Link to="/signup">新規作成する</Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
});
