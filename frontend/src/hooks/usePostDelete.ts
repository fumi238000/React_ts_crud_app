import axios from "axios";
import { useCallback, useContext } from "react";

import { PostContext } from "../providers/PostProvider";
import { postsDeleteUrl } from "../urls";
import { useMessage } from "./useMessage";
import { PostType } from "../types/api/post";
import { useLocalStrage } from "./useLocalStrage";

export const usePostDelete = () => {
  const { showMessage } = useMessage();
  const { loginUserData } = useLocalStrage();
  const { posts, setPosts } = useContext(PostContext);

  const deletePost = useCallback((postId: number) => {
    axios
      .delete(postsDeleteUrl(postId), {
        params: {
          "access-token": loginUserData[`access-token`],
          client: loginUserData[`client`],
          uid: loginUserData[`uid`],
        },
      })
      .then((res) => {
        //TODO: 2回目以降がうまくいかないので、修正すること
        setPosts(
          posts.filter((post: PostType) => {
            return post.id !== postId;
          })
        );
        showMessage({ title: "投稿を削除しました", status: "error" });
      })
      .catch((error) => {
        showMessage({ title: "投稿を削除できませんでした", status: "success" });
      });
  }, []);

  return { deletePost };
};
