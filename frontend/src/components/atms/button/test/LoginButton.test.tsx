import { render, screen } from "@testing-library/react";
import { LoginButton } from "../LoginButton";

describe("レンダリングした時", () => {
  it("ボタンが正しくレンダリングされる", () => {
    const damyData = {
      bg: "red.300",
      color: "white",
      children: "ログイン",
    };

    render(
      <LoginButton
        bg={damyData.bg}
        color={damyData.color}
        // onClick={damyData.bg}
        // isLoading={ture or false}
        // isDisabled={!!inputEmailError || !!inputPasswordError}
      >
        {damyData.children}
      </LoginButton>
    );

    //TODO: テストする内容を検証する
    // 今回は、「damyDataを渡した場合、damyDataが表示されることをテストしている
    // 必要性に少し疑問がある・・。
    expect(screen.getByRole("button")).toBeTruthy();
    // expect(screen.getByRole("button")).toHaveStyle(damyData.bg);
    // expect(screen.getByRole("button")).toHaveStyle(damyData.color);
    // expect(screen.getByRole("button")).toHaveTextContent(damyData.children);
  });
});
