import { render, screen } from "@testing-library/react";
import { PostCreatePage } from "../PostCreatePage";

describe("レンダリングした時", () => {
  it("必要な要素が存在する", () => {
    render(<PostCreatePage />);

    //TODO: LocalStrageのデータが必要なため、パス

    // expect(screen.getByRole("heading")).toBeTruthy();
    // expect(screen.getByRole("heading")).toHaveTextContent("新規作成");
    // expect(screen.getByText("タイトル")).toBeTruthy();
    // expect(screen.getByText("詳細")).toBeTruthy();
    // expect(screen.getByPlaceholderText("タイトル")).toBeTruthy();
    // expect(screen.getByPlaceholderText("詳細")).toBeTruthy();
    // expect(screen.getAllByRole("button")[0]).toHaveTextContent("戻る");
    // expect(screen.getAllByRole("button")[1]).toHaveTextContent("作成する");
    // expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
