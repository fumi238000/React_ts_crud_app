import axios from "axios";
import { memo } from "react";

import { logInUrl } from "../urls";

export const login = () => {}

// export const login = (email:string, password:string) => {
//     axios.get(logInUrl, {
//       email: email,
//       password: password
//       })
//       .then(res => {
//         console.log(res);
//       })
//       .catch(error => {
//         console.log(error);
//       });
// };