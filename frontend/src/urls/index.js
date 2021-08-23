//ローカルホスト
const DEFAULT_API_LOCALHOST = 'http://localhost:3000/v1'

//Post
export const postsIndexUrl = `${DEFAULT_API_LOCALHOST}/posts`
export const postsCreateUrl = `${DEFAULT_API_LOCALHOST}/posts`
export const postsDeleteUrl = (postId) =>
  `${DEFAULT_API_LOCALHOST}/posts/${postId}`

//User
export const logInUrl = `${DEFAULT_API_LOCALHOST}/auth/sign_in`
export const logOutUrl = `${DEFAULT_API_LOCALHOST}/auth/sign_out`