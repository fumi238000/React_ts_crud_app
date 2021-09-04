import { useState, useContext, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { postsCreateUrl } from "../urls";
import { useMessage } from "./useMessage";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const usePostCreate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [createLoading, setCreateLoading] = useState(false);
  const { loginUser } = useContext(LoginUserContext);

  const createPost = useCallback((postTitle: string, postDetails: string) => {
    setCreateLoading(true);

    axios
      .post(postsCreateUrl, {
        title: postTitle,
        details: postDetails,
        uid: loginUser?.uid,
        "access-token": loginUser?.accessToken,
        client: loginUser?.client,
      })
      .then((res) => {
        console.log(res);
        showMessage({ title: "投稿を作成しました", status: "success" });
        setCreateLoading(false);
        history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
        setCreateLoading(false);
        showMessage({ title: "作成に失敗しました", status: "error" });
      });
  }, []);

  //TODO: ここで作成したPostのidを返して、無駄なAPI通信を省きたい
  return { createPost, createLoading };
};
