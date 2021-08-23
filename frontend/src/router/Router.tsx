import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { PostRoutes } from "./PostRoutes";
import { LoginPage } from "../components/pages/user/LoginPage";

export const Router: VFC = memo(() => {
  return(
    <Switch>
      <Route path="/login">
        <LoginPage/>
      </Route>
      <Route 
        path="/posts"render = {({ match: { url }}) => (
        <Switch>
          {PostRoutes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}>
              { route.children }
            </Route>
          ))}
        </Switch>
      )}>
      </Route>

    </Switch>
  )
});