import { useState, memo, VFC, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { PostCreate } from "../../../hooks/usePostCreate";

export const PostCreatePage: VFC = memo(() => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  const [inputPostTitle, setInputPostTitle] = useState('')
  const [inputPostDetails, setInputPostDetails] = useState('')
  const onChangeInputPostTitle = (e: ChangeEvent<HTMLInputElement>) => setInputPostTitle(e.target.value);
  const onChangeInputPostDetails = (e: ChangeEvent<HTMLInputElement>) => setInputPostDetails(e.target.value);

  const onClickCreatePost = () => {
    PostCreate(inputPostTitle,inputPostDetails);
    history.push("/post");
  }

  return (
    <>
      <button onClick={onClickBack}>戻る</button>
      <h1>新規作成</h1>
      <p>タイトル</p>
      <input placeholder="タイトル"
             value={inputPostTitle}
             onChange={onChangeInputPostTitle}
      />

      <p>詳細</p>
      <input placeholder="詳細"
             value={inputPostDetails}
             onChange={onChangeInputPostDetails}
      />
      <br/>
      <br/>
      <button onClick={onClickCreatePost}>新規作成</button>
    </>
  )
});
