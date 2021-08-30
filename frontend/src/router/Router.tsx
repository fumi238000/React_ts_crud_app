import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { PostRoutes } from "./PostRoutes";
import { LoginPage } from "../components/pages/user/LoginPage";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { MyPage } from "../components/pages/user/MyPage";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { SignUpPage } from "../components/pages/user/SignUpPage";
import { UserEditPage } from "../components/pages/user/UserEditPage";
import { PasswordEditPage } from "../components/pages/user/PasswordEditPage";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return(
    <Switch>
      <LoginUserProvider>
      <Route path="/login">
        <HeaderLayout>
          <LoginPage/>
        </HeaderLayout>
      </Route>

      <Route path="/signup">
        <HeaderLayout>
          <SignUpPage />
        </HeaderLayout>
      </Route>

      <Route path="/user/edit">
        <HeaderLayout>
          <UserEditPage />
        </HeaderLayout>
      </Route>

      <Route path="/password">
        <HeaderLayout>
          <PasswordEditPage />
        </HeaderLayout>
      </Route>

      <Route path="/mypage">
        <HeaderLayout>
          <MyPage/>
        </HeaderLayout>
      </Route>

      <Route 
        path="/posts"render = {({ match: { url }}) => (
        <Switch>
          {PostRoutes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}>
              <HeaderLayout>
                { route.children }
              </HeaderLayout>
            </Route>
          ))}
        </Switch>
      )}>
      </Route>
      <Route path ="*">
        <Page404/>
      </Route>
      </LoginUserProvider>
    </Switch>
  )
});