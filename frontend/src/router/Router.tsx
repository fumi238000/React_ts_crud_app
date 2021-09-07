import { memo, useContext, VFC, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { PostRoutes } from "./PostRoutes";
import { LoginPage } from "../components/pages/user/LoginPage";
import { MyPage } from "../components/pages/user/MyPage";
import { LoginUserContext } from "../providers/LoginUserProvider";
import { SignUpPage } from "../components/pages/user/SignUpPage";
import { UserEditPage } from "../components/pages/user/UserEditPage";
import { PasswordEditPage } from "../components/pages/user/PasswordEditPage";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  const { userLoginStatus, setUserLoginStatus, setLoginUser } =
    useContext(LoginUserContext);

  useEffect(() => {
    const localStrageData = localStorage.getItem("LoginUser") as string;
    if (localStrageData) {
      const loginUserData = JSON.parse(localStrageData);
      setUserLoginStatus(true);
      setLoginUser({
        userId: loginUserData[`user_id`],
        name: loginUserData[`name`],
        email: loginUserData[`email`],
        accessToken: loginUserData[`access-token`],
        client: loginUserData[`client`],
        uid: loginUserData[`uid`],
      });
      // localStorage.removeItem('LoginUser');
    }
  }, []);

  return (
    <>
      {userLoginStatus && (
        <Switch>
          <Route
            path="/posts"
            render={({ match: { url } }) => (
              <Switch>
                {PostRoutes.map((route) => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                ))}
              </Switch>
            )}
          ></Route>

          <Route path="/user/edit">
            <UserEditPage />
          </Route>

          <Route path="/password">
            <PasswordEditPage />
          </Route>

          <Route path="/mypage">
            <MyPage />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      )}

      {!userLoginStatus && (
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/signup">
            <SignUpPage />
          </Route>

          <Route path="*">
            <LoginPage />
          </Route>
        </Switch>
      )}
    </>
  );
});
