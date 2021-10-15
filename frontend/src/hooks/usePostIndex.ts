import { useCallback, useContext } from "react";
import axios from "axios";

import { postsIndexUrl } from "../urls";
import { PostContext } from "../providers/PostProvider";
import { PostType } from "../types/api/post";
import { useLocalStrage } from "./useLocalStrage";

export const usePostIndex = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { loginUserData } = useLocalStrage();

  const getPosts = useCallback(() => {
    axios
      .get<Array<PostType>>(postsIndexUrl, {
        // TODO: これもしかしたら、分解しなくてもloginUserData渡すだけでいいかも
        params: {
          "access-token": loginUserData[`access-token`],
          client: loginUserData[`client`],
          uid: loginUserData[`uid`],
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
  }, []);
  return { getPosts, posts };
};
