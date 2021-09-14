import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { UserType } from "../types/api/user";

type LoginUserContextType = {
  loginUser: UserType | null;
  setLoginUser: Dispatch<SetStateAction<UserType | null>>;
  userLoginStatus: boolean;
  setUserLoginStatus: Dispatch<SetStateAction<boolean>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<UserType | null>(null);
  const [userLoginStatus, setUserLoginStatus] = useState<boolean>(false);
  return (
    <LoginUserContext.Provider
      value={{ loginUser, setLoginUser, userLoginStatus, setUserLoginStatus }}
    >
      {children}
    </LoginUserContext.Provider>
  );
};
