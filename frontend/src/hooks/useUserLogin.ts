import axios from "axios";
import { useHistory } from "react-router-dom";

import { logInUrl } from "../urls";
import { useMessage } from "./useMessage";

export const useUserLogin = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const login = (email: string, password: string) => {
    axios.post(logInUrl,{
      email: email,
      password: password
    })
      .then(res => {
        console.log(res.data);
        console.log(res.headers);
        showMessage({title: "ログインしました", status: "success"})
        history.push("/posts");
      })
      .catch(error => {
        console.log(error);
        showMessage({title: "ログインにできませんでした", status: "error"})
      });
    };
    // todo: userIdも返せるようにしたい。
    return { login }
};