import { memo, VFC } from "react";
import { PostForm } from '../../molecules/PostForm';
import { GoBackButton } from '../../atms/button/GoBackButton';

type Props = {
  postTitle?: string;
  postDetails?: string;
}

export const PostEditPage: VFC<Props> = memo(() => {
  // const {postTitle, postDetails } = props;

  return (
    <>
      <GoBackButton/>
      <PostForm
        actionName={"編集"}
        postTitle={"ここにタイトルが渡る予定"}
        // postTitle={postTitle}
        postDetails={"ここに詳細が渡る予定"}
        // postDetails={postDetails}
        actionButtonName={"更新する"}
      />
    </>
  )
});
