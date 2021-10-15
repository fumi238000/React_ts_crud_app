import { render, screen } from "@testing-library/react";
import { RedButton } from "../RedButton";

describe("レンダリングした時", () => {
  it("RedButtonが正しくレンダリングされる", () => {
    render(<RedButton>ログアウト</RedButton>);

    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByRole("button")).toHaveTextContent("ログアウト");
  });

  // TODO: クリックしたときのテストを実装
});
