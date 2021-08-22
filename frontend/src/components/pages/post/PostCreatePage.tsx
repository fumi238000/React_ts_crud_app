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
    //ここで値を更新したい！
    // setPosts(posts.filter(post => post.id ＋？ postId)) //今回作成したものを追加して更新する
    history.push("/post"); //もしくはここで渡す？
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
