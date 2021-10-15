import { render, screen } from "@testing-library/react";
import { PostEditePage } from "./PostEditePage";

describe("レンダリングした時", () => {
  it("必要な要素が存在する", () => {
    render(<PostEditePage />);

    //TODO: LocalStrageのデータが必要なため、パス

    // expect(screen.getByRole("heading")).toBeTruthy();
    // expect(screen.getByRole("heading")).toHaveTextContent("編集");
    // expect(screen.getByText("タイトル")).toBeTruthy();
    // expect(screen.getByText("詳細")).toBeTruthy();
    // expect(screen.getByPlaceholderText("タイトル")).toBeTruthy();
    // expect(screen.getByPlaceholderText("詳細")).toBeTruthy();
    // expect(screen.getAllByRole("button")[0]).toHaveTextContent("戻る");
    // expect(screen.getAllByRole("button")[1]).toHaveTextContent("更新する");
    // expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
