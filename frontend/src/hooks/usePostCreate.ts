import { useState, useCallback, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { postsCreateUrl } from "../urls";
import { useMessage } from "./useMessage";
import { PostContext } from "../providers/PostProvider";
import { LocalStrageUserType } from "../types/api/user";

export const usePostCreate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [createLoading, setCreateLoading] = useState(false);
  const { posts, setPosts } = useContext(PostContext);
  const localStrageData = localStorage.getItem("LoginUser") as string;
  const loginUserData: LocalStrageUserType = JSON.parse(localStrageData);

  const createPost = useCallback((postTitle: string, postDetails: string) => {
    setCreateLoading(true);

    axios
      .post(postsCreateUrl, {
        title: postTitle,
        details: postDetails,
        "access-token": loginUserData[`access-token`],
        client: loginUserData[`client`],
        uid: loginUserData[`uid`],
      })
      .then((res) => {
        console.log(res);
        setCreateLoading(false);
        setPosts([...posts, res.data]);
        showMessage({ title: "投稿を作成しました", status: "success" });
        history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
        setCreateLoading(false);
        showMessage({ title: `${error.response.data}`, status: "error" });
      });
  }, []);

  return { createPost, createLoading };
};
