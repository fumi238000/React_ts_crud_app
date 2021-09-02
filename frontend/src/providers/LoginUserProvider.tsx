import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type User = {
  userId: number;
  name: string;
  email: string;
  uid?: string;
  client?: string;
  accessToken?: string;
};

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
  userLoginStatus: boolean;
  setUserLoginStatus: Dispatch<SetStateAction<boolean>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const [userLoginStatus, setUserLoginStatus] = useState<boolean | boolean>(
    false
  );

  return (
    <LoginUserContext.Provider
      value={{ loginUser, setLoginUser, userLoginStatus, setUserLoginStatus }}
    >
      {children}
    </LoginUserContext.Provider>
  );
};
