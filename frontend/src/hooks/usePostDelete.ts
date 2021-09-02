import axios from "axios";

import { postsDeleteUrl } from "../urls";
import { useMessage } from "./useMessage";

export const usePostDelete = () => {
  const { showMessage } = useMessage();

  const deletePost = (postId: number) => {
    axios
      .delete(postsDeleteUrl(postId))
      .then((res) => {
        console.log(res);
        showMessage({ title: "投稿を削除しました", status: "error" });
      })
      .catch((error) => {
        console.log(error);
        showMessage({ title: "投稿を削除できませんでした", status: "success" });
      });
  };
  //todo: 削除したidを渡して、それを削除する記述を書きたい
  return { deletePost };
};
