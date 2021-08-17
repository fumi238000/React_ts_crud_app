Rails.application.routes.draw do
  namespace :v1 do
    root to: "v1/posts#index"
    mount_devise_token_auth_for "User", at: "auth"
    resources :posts
  end
end
