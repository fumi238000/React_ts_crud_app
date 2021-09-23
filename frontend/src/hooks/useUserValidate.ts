import { useState } from "react";

export const useUserValidate = () => {
  const [inputEmailError, setInputEmailError] = useState<string>("");
  const [inputPasswordError, setInputPasswordError] = useState<string>("");

  // TODO: 正規表現を追加
  const validateUserEmail = (email: string) => {
    let error = "";
    if (!email) {
      error = "Emailを入力してください";
    }
    setInputEmailError(error);
  };

  //TODO: 新規作成のときのみ実装
  const validateUserPassword = (password: string) => {
    let error = "";
    if (!password) {
      error = "パスワードを入力してください";
    }
    setInputPasswordError(error);
  };

  return {
    validateUserEmail,
    inputEmailError,
    validateUserPassword,
    inputPasswordError,
  };
};
