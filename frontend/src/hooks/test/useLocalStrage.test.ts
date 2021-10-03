import { useLocalStrage } from "../useLocalStrage";
import { renderHook } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";

import { LocalStrageUserType } from "../types/api/user";
import { act } from "react-dom/test-utils";

//TOOD: これが必要な理由
afterEach(() => cleanup());

const damyLocalStrageData: LocalStrageUserType = {
  user_id: 99999,
  name: "YamadaTaro",
  email: "test@example.com",
  "access-token": "damiy-access-token",
  client: "damiy-client",
  uid: "damiy-uid",
};

describe("useLocalStrage CustumHooks", () => {
  it("LocalStrageに情報がある場合、LocalStrageから[UserData]を取得する", () => {
    const DamyLoginUser = JSON.stringify(damyLocalStrageData);
    localStorage.setItem("LoginUser", DamyLoginUser);
    const { result } = renderHook(() => useLocalStrage());
    act(() => {
      expect(result.current?.loginUserData).toBeTruthy();
      expect(result.current?.loginUserData).toStrictEqual(damyLocalStrageData);
    });
    localStorage.removeItem("LoginUser");
  });

  it("LocalStrageに情報がない場合、データを取得しない", () => {
    const { result } = renderHook(() => useLocalStrage());
    act(() => {
      expect(result.current).toBeUndefined();
    });
  });
});
