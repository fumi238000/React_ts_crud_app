import { renderHook } from "@testing-library/react-hooks";
import { cleanup, render, screen } from "@testing-library/react";
import { useMessage } from "../useMessage";
import { LoginPage } from "../../components/pages/user/LoginPage";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("useMessage CustumHooks", () => {
  afterEach(() => cleanup());

  type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
  };

  const damyData: Props = { title: "damyTitle", status: "error" };

  it("カスタムフックが呼ばれた時、メッセージが表示される", () => {
    const { result } = renderHook(() => useMessage());
    act(() => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );
    });
    result.current.showMessage(damyData);
    expect(screen.getByText("damyTitle")).toBeTruthy();
  });

  it("カスタムフックが呼ばれない場合、メッセージが表示されない", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByText("damyTitle")).not.toBeEmptyDOMElement();
  });
});
