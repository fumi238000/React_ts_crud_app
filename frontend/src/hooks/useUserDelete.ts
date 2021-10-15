import axios from "axios";
import { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { UserDeleteUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const useUserDelete = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const { loginUser, setLoginUser, setUserLoginStatus } =
    useContext(LoginUserContext);

  const userDelete = useCallback(() => {
    setLoading(true);

    axios
      .delete(UserDeleteUrl, {
        headers: {
          uid: loginUser?.uid,
          "access-token": loginUser?.accessToken,
          client: loginUser?.client,
        },
      })
      .then((res) => {
        setLoginUser(null);
        showMessage({ title: "ユーザーを削除しました", status: "error" });
        setLoading(false);
        setUserLoginStatus(false);
        history.push("/login");
      })
      .catch((error) => {
        showMessage({ title: "削除できませんでした", status: "error" });
        setLoading(false);
      });
  }, []);
  return { userDelete, loading };
};
