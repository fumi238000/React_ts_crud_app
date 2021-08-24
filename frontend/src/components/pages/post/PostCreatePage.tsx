import { memo, VFC } from "react";
import { PostForm } from '../../molecules/PostForm';
import { GoBackButton } from '../../atms/button/GoBackButton';

export const PostCreatePage: VFC = memo(() => {
  return (
    <>
      <GoBackButton/>
      <PostForm
        actionName={"新規作成"}
        postTitle={""}
        postDetails={""}
        actionButtonName={"作成する"}
      />
    </>
  )
});
