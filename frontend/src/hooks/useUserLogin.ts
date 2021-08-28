import axios from "axios";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { logInUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";


export const useUserLogIn = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { setLoginUser, setUserLoginStatus } = useContext(LoginUserContext);

  const logIn = (email: string, password: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setLoading(true)

    axios.post(logInUrl,{
      email: email,
      password: password
    })
      .then(res => {
        setLoginUser({
          userId: res.data[`data`][`id`],
          accessToken: res.headers[`access-token`],
          client: res.headers["client"],
          uid: (res.headers[`uid`])
      })

        showMessage({title: "ログインしました", status: "success"})
        setLoading(false)
        setUserLoginStatus(true)
        history.push("/posts");
      })
      .catch(error => {
        console.log(error);
        showMessage({title: "ログインにできませんでした", status: "error"})
        setLoading(false)
      })
    };
    // todo: userIdも返せるようにしたい。
    return { logIn, loading }
};