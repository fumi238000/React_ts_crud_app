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
    path: "/:id",
    exact: false,
    children: <PostEditPage/>
  },
  
];
