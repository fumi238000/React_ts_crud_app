import { useState } from "react";

export const useUserValidate = () => {
  const [inputEmailError, setInputEmailError] = useState<string>("");
  const [inputNameError, setInputNameError] = useState<string>("");
  const [inputPasswordError, setInputPasswordError] = useState<string>(""); //login + signup

  const [inputUserPasswordError, setInputUserPasswordError] =
    useState<string>(""); //edit
  const [inputConformPasswordError, setInputConformPasswordError] =
    useState<string>(""); //edit
  const reg =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;

  const validateUserEmail = (email: string) => {
    let error = "";
    if (!email) {
      error = "Emailを入力してください";
    }
    setInputEmailError(error);
  };

  // login + signup
  const validateUserPassword = (password: string) => {
    let error = "";
    if (!password) {
      error = "パスワードを入力してください";
    }
    setInputPasswordError(error);
  };

  const validateEditUserEmail = (email: string) => {
    let error = "";
    if (!email) {
      error = "Emailを入力してください";
    } else if (!reg.test(email)) {
      error = "正しいメールアドレスを記入してください";
    }
    setInputEmailError(error);
  };

  const validateEditUserName = (name: string) => {
    let error = "";
    if (!name) {
      error = "名前を入力してください";
    }
    setInputNameError(error);
  };

  //userEdit
  const validateEditUserPassword = (password: string) => {
    let error = "";
    if (!password) {
      error = "パスワードを入力してください";
    } else if (password.length < 8) {
      error = "パスワードは8文字以上で入力してください";
    }
    setInputUserPasswordError(error);
  };

  //userEdit(確認用)
  const validateEditConformPassword = (
    password: string,
    conformPassword: string
  ) => {
    let error = "";
    if (!conformPassword) {
      error = "パスワード(確認用)を入力してください";
    } else if (conformPassword.length < 8) {
      error = "パスワードは8文字以上で入力してください";
    } else if (password !== conformPassword) {
      error = "パスワードが一致しません。";
    }
    setInputConformPasswordError(error);
  };

  return {
    inputEmailError,
    inputPasswordError,
    inputUserPasswordError,
    inputConformPasswordError,
    inputNameError,
    validateUserEmail,
    validateUserPassword,
    validateEditUserEmail,
    validateEditUserName,
    validateEditUserPassword,
    validateEditConformPassword,
  };
};
