import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type User = {
  userId?: number;
  uid?: string;
  client?: string;
  accessToken?: string;
}

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode}) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null)
  return (
    <LoginUserContext.Provider value = {{ loginUser, setLoginUser }} >
      { children }
    </LoginUserContext.Provider>
  )

}




