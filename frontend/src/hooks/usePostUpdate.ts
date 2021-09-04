import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginUserContext } from "../providers/LoginUserProvider";

import { postsUpdateUrl } from "../urls";
import { useMessage } from "./useMessage";

export const usePostUpdate = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [updateLoading, setupdateLoading] = useState(false);
  const { loginUser } = useContext(LoginUserContext);

  const updatePost = useCallback(
    (postId: number, postTitle: string, postDetals: string) => {
      setupdateLoading(true);

      axios
        .put(postsUpdateUrl(postId), {
          title: postTitle,
          details: postDetals,
          uid: loginUser?.uid,
          "access-token": loginUser?.accessToken,
          client: loginUser?.client,
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
          showMessage({ title: "更新に失敗しました", status: "error" });
        });
    },
    []
  );
  return { updatePost, updateLoading };
};
