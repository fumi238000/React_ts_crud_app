import {
  Flex,
  Box,
  Heading,
  Divider,
  Stack,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useUserUpdate } from "../../../hooks/useUserUpdate";
import { GoBackButton } from "../../atms/button/GoBackButton";
import { useUserValidate } from "../../../hooks/useUserValidate";
import { useLocalStrage } from "../../../hooks/useLocalStrage";

export const UserEditPage: VFC = memo(() => {
  const { userUpdate, loading } = useUserUpdate();
  const {
    inputEmailError,
    inputNameError,
    validateEditUserEmail,
    validateEditUserName,
  } = useUserValidate();
  const { loginUserData } = useLocalStrage();

  //name
  const [inputUserName, setInputUserName] = useState<string>(
    loginUserData.name
  );
  const onChangeInputUserName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setInputUserName(name);
    validateEditUserName(name);
  };

  //email
  const [inputEmail, setinputEmail] = useState<string>(loginUserData.email);
  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setinputEmail(email);
    validateEditUserEmail(email);
  };

  //更新ボタン
  const onClickUserUpdate = () => {
    userUpdate(inputUserName, inputEmail);
  };

  return (
    <>
      <GoBackButton />
      <Flex align="center" justify="center" height="50vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center" py={4}>
            ユーザー編集
          </Heading>
          <Divider my={4}></Divider>
          <Stack spacing={4} py={4} px={6}>
            <p>ユーザーネーム</p>
            <Input
              placeholder="UserName"
              type="text"
              value={inputUserName}
              onChange={onChangeInputUserName}
            />
            {inputNameError && <Text color="red">{inputNameError}</Text>}

            <p>新しいEmail</p>
            <Input
              placeholder="Email"
              type="email"
              value={inputEmail}
              onChange={onChangeInputEmail}
            />
            {inputEmailError && <Text color="red">{inputEmailError}</Text>}

            <Button
              bg="blue.500"
              color="white"
              onClick={onClickUserUpdate}
              isLoading={loading}
              isDisabled={!!inputNameError || !!inputEmailError}
            >
              更新する
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
