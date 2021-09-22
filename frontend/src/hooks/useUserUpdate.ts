/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useCallback, useContext, useState } from "react";

import { UserUpdateUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { useHistory } from "react-router-dom";
import { LocalStrageUserType } from "../types/api/user";
import { useLocalStrage } from "./useLocalStrage";

export const useUserUpdate = () => {
  const { showMessage } = useMessage();
  const { loginUser, setLoginUser, setUserLoginStatus } =
    useContext(LoginUserContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { loginUserData} = useLocalStrage();

  const userUpdate = useCallback((name: string, email: string) => {
    setLoading(true);

    axios
      .put(UserUpdateUrl, {
        name: name,
        email: email,
        "access-token": loginUser?.accessToken,
        client: loginUser?.client,
        uid: loginUser?.uid,
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

        showMessage({ title: "ユーザー情報を更新しました", status: "success" });
        setUserLoginStatus(true);
        setLoading(false);
        history.push("/mypage");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        showMessage({
          title: "ユーザー情報の更新に失敗しました",
          status: "error",
        });
      });
  }, []);
  return { userUpdate, loading };
};
