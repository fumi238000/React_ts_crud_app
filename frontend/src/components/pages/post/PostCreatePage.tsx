import { memo, VFC } from "react";

export const PostCreatePage: VFC = memo(() => {
  return (
    <>
      <button>戻る</button>
      <h1>新規作成</h1>
      <input placeholder="TODOを入力する" />
      <button>新規作成</button>
    </>
  )
});
