import { LocalStrageUserType } from "../types/api/user";

export const useLocalStrage = () => {
  const localStrageData = localStorage.getItem("LoginUser") as string;

  if (localStrageData) {
    const userData: LocalStrageUserType = JSON.parse(localStrageData);
    const loginUserData = {
      user_id: userData["user_id"],
      name: userData["name"],
      email: userData["email"],
      uid: userData["uid"],
      client: userData["client"],
      "access-token": userData["access-token"],
    };
    return { loginUserData };
  } else {
    const loginUserData = {
      user_id: 0,
      name: "なし",
      email: "test@gmail.com",
      uid: "なし",
      client: "なし",
      "access-token": "なし",
    };
    return { loginUserData };
  }
};
