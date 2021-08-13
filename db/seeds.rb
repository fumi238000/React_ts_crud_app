user_params = [
  {
    email: "example@example.com",
    password: "password"
  }
]

User.delete_all
User.create!(user_params)
puts "ユーザーの初期データの投入に成功しました!"