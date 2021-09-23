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
import { useUserPasswordUpdate } from "../../../hooks/useUserPasswordUpdate";
import { useUserValidate } from "../../../hooks/useUserValidate";
import { GoBackButton } from "../../atms/button/GoBackButton";

export const PasswordEditPage: VFC = memo(() => {
  const [inputUserPassword, setInputUserPassword] = useState<string>("");
  const [inputConformPassword, setInputConformPassword] = useState<string>("");

  const {
    inputUserPasswordError,
    inputConformPasswordError,
    validateEditUserPassword,
    validateEditConformPassword,
  } = useUserValidate();

  const onChangeInputUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setInputUserPassword(password);
    validateEditUserPassword(password);
  };

  const onChangeInputConformPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const conformPassword = e.target.value;
    setInputConformPassword(conformPassword);
    validateEditConformPassword(inputUserPassword, conformPassword);
  };

  const { userPasswordUpdate, loading } = useUserPasswordUpdate();

  //更新ボタン
  const onClickPasswordUpdate = () => {
    userPasswordUpdate(inputUserPassword);
  };

  return (
    <>
      <GoBackButton />
      <Flex align="center" justify="center" height="50vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center" py={4}>
            パスワードを編集
          </Heading>
          <Divider my={4}></Divider>
          <Stack spacing={4} py={4} px={6}>
            <p>新しいパスワード</p>
            <Input
              placeholder="パスワード"
              type="password"
              value={inputUserPassword}
              onChange={onChangeInputUserPassword}
            />
            {inputUserPasswordError && (
              <Text color="red">{inputUserPasswordError}</Text>
            )}

            <p>新しいパスワード(確認用)</p>
            <Input
              placeholder="パスワード"
              type="password"
              value={inputConformPassword}
              onChange={onChangeInputConformPassword}
            />
            {inputConformPasswordError && (
              <Text color="red">{inputConformPasswordError}</Text>
            )}

            <Button
              bg="blue.500"
              color="white"
              onClick={onClickPasswordUpdate}
              isLoading={loading}
              isDisabled={
                !!inputUserPasswordError || !!inputConformPasswordError
              }
            >
              更新する
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
