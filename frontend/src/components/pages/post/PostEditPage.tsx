import { memo, VFC } from "react";
import { Link, useHistory } from "react-router-dom";

export const PostEditPage: VFC = memo(() => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <button onClick={onClickBack}>戻る</button>
      <h1>投稿編集ページ</h1>
      <input placeholder="TODOを入力する" />
      <button onClick={onClickBack}>更新</button>
    </div>
  )
});
  

