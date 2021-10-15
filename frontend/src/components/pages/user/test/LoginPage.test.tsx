import { render, screen } from "@testing-library/react";
import { LoginPage } from "../LoginPage";
import { BrowserRouter } from "react-router-dom";

describe("レンダリングした時", () => {
  it("必要な要素が存在する", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("heading")).toHaveTextContent("ログイン");
    expect(screen.getByText("Email")).toBeTruthy();
    expect(screen.getByText("パスワード")).toBeTruthy();
    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
    expect(screen.getByPlaceholderText("パスワード")).toBeTruthy();
    expect(screen.getByRole("link")).toBeTruthy();
    expect(screen.getByRole("link")).toHaveTextContent("新規作成する");
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByRole("button")).toHaveTextContent("ログイン");
  });
});
