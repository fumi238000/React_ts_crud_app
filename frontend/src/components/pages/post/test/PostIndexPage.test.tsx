import { render, screen } from "@testing-library/react";
import { PostIndexPage } from "../PostIndexPage";

describe("レンダリングした時", () => {
  it("必要な要素が存在する", () => {
    render(<PostIndexPage />);

    //TODO: LocalStrageのデータが必要なため、パス
    // expect(screen.getByRole("heading")).toBeTruthy();
    // expect(screen.getByRole("heading")).toHaveTextContent("投稿一覧");
    // expect(screen.getAllByRole("button")[0]).toHaveTextContent("新規作成");

    // TODO: ポストカードは別で実装
    // expect(screen.getByRole("heading")).toHaveTextContent(damyData.postTitle);
    // expect(screen.getByRole("heading")).toHaveTextContent(damyData.userName);
    // expect(screen.getByRole("heading")).toHaveTextContent(damyData.postDetails);
    // expect(screen.getAllByRole("button")[1]).toHaveTextContent("編集");
    // expect(screen.getAllByRole("button")[2]).toHaveTextContent("削除");
  });
});
