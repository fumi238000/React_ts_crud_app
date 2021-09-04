import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { PostRoutes } from "./PostRoutes";
import { LoginPage } from "../components/pages/user/LoginPage";
import { MyPage } from "../components/pages/user/MyPage";
// import { LoginUserProvider } from "../providers/LoginUserProvider";
import { SignUpPage } from "../components/pages/user/SignUpPage";
import { UserEditPage } from "../components/pages/user/UserEditPage";
import { PasswordEditPage } from "../components/pages/user/PasswordEditPage";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
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

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/signup">
        <SignUpPage />
      </Route>

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
  );
});
