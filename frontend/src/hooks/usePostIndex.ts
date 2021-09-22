import { useCallback, useContext } from "react";
import axios from "axios";

import { postsIndexUrl } from "../urls";
import { PostContext } from "../providers/PostProvider";
import { PostType } from "../types/api/post";
import { LocalStrageUserType } from "../types/api/user";

export const usePostIndex = () => {
  const { posts, setPosts } = useContext(PostContext);
  const localStrageData = localStorage.getItem("LoginUser") as string;
  const loginUserData: LocalStrageUserType = JSON.parse(localStrageData);

  const getPosts = useCallback(() => {
    axios
      .get<Array<PostType>>(postsIndexUrl, {
        params: {
          "access-token": loginUserData[`access-token`],
          client: loginUserData[`client`],
          uid: loginUserData[`uid`],
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { getPosts, posts };
};
