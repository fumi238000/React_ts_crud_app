import { PostCreatePage } from "../components/pages/post/PostCreatePage";
import { PostEditPage } from "../components/pages/post/PostEditPage";
import { PostIndexPage } from "../components/pages/post/PostIndexPage";

export const PostRoutes = [
  {
    path: "/",
    exact: true,
    children: <PostIndexPage/>
  },
  {
    path: "/new",
    exact: false,
    children: <PostCreatePage/>
  },
  {
    path: "/edit", //TODO: 後にidを含め、動的に実装する
    exact: false,
    children: <PostEditPage/>
  },
  
];
