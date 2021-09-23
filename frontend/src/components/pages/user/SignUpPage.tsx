import {
  Flex,
  Box,
  Heading,
  Divider,
  Stack,
  Input,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { Link } from "react-router-dom";
import { useUserSignUp } from "../../../hooks/useUserSignUp";
import { useUserValidate } from "../../../hooks/useUserValidate";
import { LoginButton } from "../../atms/button/LoginButton";

export const SignUpPage: VFC = memo(() => {
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
  const { signUp, loading } = useUserSignUp();
  const onClickSignUp = () => signUp(inputEmail, inputPassword);
  const {
    validateUserEmail,
    inputEmailError,
    validateUserPassword,
    inputPasswordError,
  } = useUserValidate();

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" py={4}>
          新規作成
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
            onClick={onClickSignUp}
            loading={loading}
            inputEmailError={inputEmailError}
            inputPasswordError={inputPasswordError}
          >
            新規作成
          </LoginButton>
          <Box pt={4} align="center">
            <Link to="/login">ログインする</Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
});
