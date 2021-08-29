/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { UserPwUPdateUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const useUserPasswordUpdate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { loginUser,setLoginUser, setUserLoginStatus } = useContext(LoginUserContext);
  const [loading, setLoading] = useState(false);

  const userPasswordUpdate = (password: string) => {
    setLoading(true)

    axios.put(UserPwUPdateUrl, { 
      password: password,
      password_confirmation: password, 
      'uid': loginUser?.uid,
      'access-token': loginUser?.accessToken,
      'client': loginUser?.client,
      'Content-Type': 'application/json',
      })
      .then(res => {
        setLoginUser({
          userId: res.data[`data`][`id`],
          email: res.data[`data`][`email`],
          accessToken: res.headers[`access-token`],
          client: res.headers["client"],
          uid: (res.headers[`uid`])
        })
        showMessage({title: "ユーザーのパスワードを更新しました", status: "success"})
        setUserLoginStatus(true)
        setLoading(false)
        history.push("/posts");
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
        showMessage({title: "ユーザーパスワードの更新に失敗しました。", status: "error"})
      })
    };
    return { userPasswordUpdate, loading }
};