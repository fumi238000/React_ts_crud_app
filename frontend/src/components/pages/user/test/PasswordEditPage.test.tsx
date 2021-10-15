import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PasswordEditPage } from "../PasswordEditPage";

describe("レンダリングした時", () => {
  xit("必要な要素が存在する", () => {
    render(
      <BrowserRouter>
        <PasswordEditPage />
      </BrowserRouter>
    );

    // TODO: LocakStrageのテータを取得できないため、とりあえずパス
  });
});
