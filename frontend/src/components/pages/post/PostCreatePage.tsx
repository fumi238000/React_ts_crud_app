import { memo, VFC } from "react";
import { Link, useHistory } from "react-router-dom";

export const PostCreatePage: VFC = memo(() => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <>
      <button onClick={onClickBack}>戻る</button>
      <h1>新規作成</h1>
      <input placeholder="TODOを入力する" />
      <button onClick={onClickBack}>新規作成</button>
    </>
  )
});
