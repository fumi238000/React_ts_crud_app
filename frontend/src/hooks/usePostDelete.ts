import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";

import { postsDeleteUrl } from "../urls";
import { useMessage } from "./useMessage";

type Post = {
  id: number;
  title: string;
  details: string;
  user_id: number;
  user: { name: string };
};

export const usePostDelete = () => {
  const { showMessage } = useMessage();
  const localStrageData = localStorage.getItem("LoginUser") as string;
  const loginUserData = JSON.parse(localStrageData);
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
        console.log(res);
        //TODO: 2回目以降がうまくいかないので、修正すること
        setPosts(
          posts.filter((post: Post) => {
            return post.id !== postId;
          })
        );
        showMessage({ title: "投稿を削除しました", status: "error" });
      })
      .catch((error) => {
        console.log(error);
        showMessage({ title: "投稿を削除できませんでした", status: "success" });
      });
  }, []);

  return { deletePost };
};
