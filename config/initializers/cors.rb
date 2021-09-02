Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:3001", "https://react-todo-2021-9-2.herokuapp.com/api"

    resource "*",
             headers: :any,
             expose: ["access-token", "expiry", "token-type", "uid", "client"],
             methods: [:get, :post, :patch, :put, :delete]
  end
end
