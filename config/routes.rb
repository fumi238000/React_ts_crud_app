Rails.application.routes.draw do
  # 本番環境の設定
  get "*path", to: "application#fallback_index_html", constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }

  namespace :v1 do
    mount_devise_token_auth_for "User", at: "auth", controllers: {
      registrations: "v1/auth/registrations",
      passwords: "v1/auth/passwords"
    }
    resources :posts
  end
end
