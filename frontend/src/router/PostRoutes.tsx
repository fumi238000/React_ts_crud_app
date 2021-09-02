import { PostCreatePage } from "../components/pages/post/PostCreatePage";
import { PostEditPage } from "../components/pages/post/PostEditPage";
import { PostIndexPage } from "../components/pages/post/PostIndexPage";

export const PostRoutes = [
  {
    path: "/",
    exact: true,
    children: <PostIndexPage />,
  },
  {
    path: "/new",
    exact: false,
    children: <PostCreatePage />,
  },
  //todo: 正常値を渡さない場合のエラー対応を実装する
  {
    path: "/:postId",
    exact: false,
    children: <PostEditPage />,
  },
];
