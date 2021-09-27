import axios from "axios";
import { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { logInUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { LocalStrageUserType } from "../types/api/user";

export const useUserLogIn = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser, setUserLoginStatus } = useContext(LoginUserContext);

  const logIn = useCallback((email: string, password: string) => {
    setLoading(true);

    axios
      .post(logInUrl, {
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
        //TODO: useLocalStrageに置き換える
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

        showMessage({ title: "ログインしました", status: "success" });
        setLoading(false);
        setUserLoginStatus(true);
        history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
        showMessage({ title: "ログインできませんでした", status: "error" });
        setLoading(false);
      });
  }, []);
  return { logIn, loading };
};
