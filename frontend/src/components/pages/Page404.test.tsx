import { render, screen } from "@testing-library/react";
import { Page404 } from "./Page404";
import { BrowserRouter } from "react-router-dom";

describe("レンダリングした時", () => {
  it("必要な要素が存在する", () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("heading")).toHaveTextContent("PAGE 404");
    expect(screen.getByRole("link")).toBeTruthy();
    expect(screen.getByRole("link")).toHaveTextContent("TOPへ戻る");
  });
});
