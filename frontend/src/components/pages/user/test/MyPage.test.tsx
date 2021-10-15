import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MyPage } from "../MyPage";

describe("レンダリングした時", () => {
  it("ボタンが存在する", () => {
    render(
      <BrowserRouter>
        <MyPage />
      </BrowserRouter>
    );

    //マイページテキスト
    expect(screen.getAllByRole("heading")[0]).toHaveTextContent("マイページ");
    expect(screen.getAllByRole("heading")[1]).toHaveTextContent("ログインID：");
    expect(screen.getAllByRole("heading")[2]).toHaveTextContent("Email：");
    expect(screen.getAllByRole("heading")[3]).toHaveTextContent(
      "ユーザーネーム："
    );

    //ユーザーネーム
    expect(screen.getAllByRole("button")[0]).toHaveTextContent("ユーザー編集");
    expect(screen.getAllByRole("button")[1]).toHaveTextContent(
      "パスワード編集"
    );
    expect(screen.getAllByRole("button")[2]).toHaveTextContent("ログアウト");
    expect(screen.getAllByRole("button")[3]).toHaveTextContent(
      "このユーザーを削除"
    );
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });
});
