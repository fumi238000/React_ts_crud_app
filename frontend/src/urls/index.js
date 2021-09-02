//ローカルホスト
const DEFAULT_API_LOCALHOST = "http://localhost:3000/v1";

//Post
export const postsIndexUrl = `${DEFAULT_API_LOCALHOST}/posts`;
export const postsCreateUrl = `${DEFAULT_API_LOCALHOST}/posts`;
export const postsUpdateUrl = (postId) =>
  `${DEFAULT_API_LOCALHOST}/posts/${postId}`;
export const postsDeleteUrl = (postId) =>
  `${DEFAULT_API_LOCALHOST}/posts/${postId}`;

//User
export const logInUrl = `${DEFAULT_API_LOCALHOST}/auth/sign_in`;
export const logOutUrl = `${DEFAULT_API_LOCALHOST}/auth/sign_out`;
export const SignUpUrl = `${DEFAULT_API_LOCALHOST}/auth`;
export const UserDeleteUrl = `${DEFAULT_API_LOCALHOST}/auth`;
export const UserUpdateUrl = `${DEFAULT_API_LOCALHOST}/auth`;
export const UserPwUPdateUrl = `${DEFAULT_API_LOCALHOST}/auth/password`;
//todo: 重複しているURLを共通化できないか？
