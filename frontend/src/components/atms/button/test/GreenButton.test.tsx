import { render, screen } from "@testing-library/react";
import { GreenButton } from "../GreenButton";

describe("レンダリングした時", () => {
  it("RedButtonが正しくレンダリングされる", () => {
    render(<GreenButton>更新</GreenButton>);
    expect(screen.getByRole("button")).toBeTruthy();
    // expect(screen.getByRole("button")).toHaveStyle("更新");
    // expect(screen.getByRole("button")).toHaveStyle('bg: green.400');
  });
});
