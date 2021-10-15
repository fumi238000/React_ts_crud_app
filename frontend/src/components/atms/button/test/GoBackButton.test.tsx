import { render, screen } from "@testing-library/react";
import { GoBackButton } from "../GoBackButton";

describe("レンダリングした時", () => {
  it("ボタンが正しくレンダリングされる", () => {
    render(<GoBackButton />);
    expect(screen.getByRole("button")).toBeTruthy();
    // expect(screen.getByRole("button")).toHaveStyle('colorScheme: blue');
    // expect(screen.getByRole("button")).toHaveStyle('onClick: onClickBack');
  });

  // xit("クリックすると、onClickBackが実行される", ()=>{
  //   render( <GoBackButton/>);
  //   //TODO:  クリックした時、動作する
  // });
});
