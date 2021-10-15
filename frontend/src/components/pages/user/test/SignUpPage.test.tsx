import { render, screen } from "@testing-library/react";
import { SignUpPage } from "../SignUpPage";
import { BrowserRouter } from "react-router-dom";

describe("レンダリングした時", () => {
  it("必要な要素が存在する", () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );

    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("heading")).toHaveTextContent("新規作成");
    expect(screen.getByText("Email")).toBeTruthy();
    expect(screen.getByText("パスワード")).toBeTruthy();
    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
    expect(screen.getByPlaceholderText("パスワード")).toBeTruthy();
    expect(screen.getByRole("link")).toBeTruthy();
    expect(screen.getByRole("link")).toHaveTextContent("ログインする");
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByRole("button")).toHaveTextContent("新規作成");
  });
});
