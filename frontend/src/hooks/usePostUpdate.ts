import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LocalStrageUserType } from "../types/api/user";

import { postsUpdateUrl } from "../urls";
import { useMessage } from "./useMessage";

export const usePostUpdate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [updateLoading, setupdateLoading] = useState(false);

  const localStrageData = localStorage.getItem("LoginUser") as string;
  const loginUserData: LocalStrageUserType = JSON.parse(localStrageData);

  const updatePost = useCallback(
    (postId: number, postTitle: string, postDetals: string) => {
      setupdateLoading(true);

      axios
        .put(postsUpdateUrl(postId), {
          title: postTitle,
          details: postDetals,
          "access-token": loginUserData[`access-token`],
          client: loginUserData[`client`],
          uid: loginUserData[`uid`],
        })
        .then((res) => {
          console.log(res);
          showMessage({ title: "投稿を更新しました", status: "success" });
          setupdateLoading(false);
          history.push("/posts");
        })
        .catch((error) => {
          console.log(error);
          setupdateLoading(false);
          showMessage({ title: `${error.response.data}`, status: "error" });
        });
    },
    []
  );
  return { updatePost, updateLoading };
};
