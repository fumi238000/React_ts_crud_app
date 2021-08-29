/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";

import { UserUpdateUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const useUserUpdate = () => {
  const { showMessage } = useMessage();
  const { loginUser,setLoginUser, setUserLoginStatus } = useContext(LoginUserContext);
  const [loading, setLoading] = useState(false);

  const userUpdate = (name:string, email: string) => {
    setLoading(true)

    axios.put(UserUpdateUrl, { 
        'name': name,
        'email': email,
        'uid': loginUser?.uid,
        'access-token': loginUser?.accessToken,
        'client': loginUser?.client,
        'Content-Type': `application/json`,
      })
      .then(res => {
        setLoginUser({
          userId: res.data[`data`][`id`],
          name: res.data[`data`][`name`],
          email: res.data[`data`][`email`],
          accessToken: res.headers[`access-token`],
          client: res.headers["client"],
          uid: (res.headers[`uid`])
        })
        showMessage({title: "ユーザー情報を更新しました", status: "success"})
        setUserLoginStatus(true)
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
        showMessage({title: "ユーザー情報の更新に失敗しました", status: "error"})
      })
    };
    return { userUpdate, loading }
};




