import { memo } from "react";
import { PostForm } from '../../molecules/PostForm';
import { GoBackButton } from '../../atms/button/GoBackButton';
import { useLocation, useParams } from "react-router-dom";

type Props = {
  postId?: number;
  postTitle: string;
  postDetails: string;
}

export const PostEditPage = memo(() => {
  const { state } = useLocation<Props>();
  const { postId } = useParams<any>();

  return (
    <>
      <GoBackButton/>
      <PostForm
        postId = { postId }
        postTitle = {state.postTitle}
        postDetails = {state.postDetails}
        actionName = {"編集"}
        actionButtonName = {"更新する"}
      />
    </>
  )
});
