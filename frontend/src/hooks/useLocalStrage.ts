import { LocalStrageUserType } from "../types/api/user";

export const useLocalStrage = () => {
  const localStrageData = localStorage.getItem("LoginUser") as string;
  const userData: LocalStrageUserType = JSON.parse(localStrageData);
  const loginUserData = {
    user_id: userData['user_id'],
    name: userData['name'],
    email: userData['email'],
    uid: userData['uid'],
    client: userData['client'],
    "access-token": userData['access-token'],  
  }
  return { loginUserData };
};
