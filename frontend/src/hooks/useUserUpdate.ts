/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { UserUpdateUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const useUserUpdate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { loginUser,setLoginUser, setUserLoginStatus } = useContext(LoginUserContext);
  const [loading, setLoading] = useState(false);

  const userUpdate = (email: string) => {
    setLoading(true)

    axios.put(UserUpdateUrl, { 
      headers: {
        'uid': loginUser?.uid,
        'access-token': loginUser?.accessToken,
        'client': loginUser?.client,
        'Content-Type': `application/json`,
      },
      params: {email: email}
      })
      .then(res => {
        showMessage({title: "ユーザー情報を更新しました！", status: "success"})
        setUserLoginStatus(true)
        setLoading(false)
        history.push("/posts");
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
        showMessage({title: "ユーザー情報の更新に失敗しました！", status: "error"})
      })
    };
    return { userUpdate, loading }
};