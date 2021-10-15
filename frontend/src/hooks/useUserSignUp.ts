/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { SignUpUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { LocalStrageUserType } from "../types/api/user";

export const useUserSignUp = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser, setUserLoginStatus } = useContext(LoginUserContext);
  const [loading, setLoading] = useState(false);

  const signUp = (email: string, password: string) => {
    setLoading(true);

    axios
      .post(SignUpUrl, {
        name: "テストユーザー",
        email: email,
        password: password,
      })
      .then((res) => {
        const data: LocalStrageUserType = {
          user_id: res.data[`data`][`id`],
          name: res.data[`data`][`name`],
          email: res.data[`data`][`email`],
          "access-token": res.headers[`access-token`],
          client: res.headers[`client`],
          uid: res.headers[`uid`],
        };

        //LocalStrage
        const LoginUser = JSON.stringify(data);
        localStorage.setItem("LoginUser", LoginUser);
        const localStrageData = localStorage.getItem("LoginUser") as string;
        const loginUserData: LocalStrageUserType = JSON.parse(localStrageData);

        setLoginUser({
          userId: loginUserData[`user_id`],
          name: loginUserData[`name`],
          email: loginUserData[`email`],
          accessToken: loginUserData[`access-token`],
          client: loginUserData[`client`],
          uid: loginUserData[`uid`],
        });

        showMessage({
          title: "新しくユーザーを作成しました",
          status: "success",
        });
        setUserLoginStatus(true);
        setLoading(false);
        history.push("/posts");
      })
      .catch((error) => {
        setLoading(false);
        showMessage({ title: "作成に失敗しました。", status: "error" });
      });
  };
  return { signUp, loading };
};
