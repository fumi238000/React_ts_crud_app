import { useCallback, useContext } from "react";
import axios from "axios";

import { postsIndexUrl } from "../urls";
import { PostContext } from "../providers/PostProvider";

export const usePostIndex = () => {
  const { posts, setPosts } = useContext(PostContext);
  const getPosts = useCallback(() => {
    axios
      .get(postsIndexUrl)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { getPosts, posts };
};
