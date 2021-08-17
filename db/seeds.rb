# User
User.find_or_create_by!(email: "example@example.com") do |u|
  u.email = "example@example.com"
  u.password = "password"
  puts "Userの初期データ導入完了"
end

# POST
post_params = [
  {
    title: "React",
    details: "ユーザインターフェース構築のための JavaScript ライブラリ"
  },
  {
    title: "Vue.js",
    details: "The Progressive JavaScript Framework"
  },
  {
    title: "Angular",
    details: "モバイルとデスクトップ，ひとつのフレームワーク"
  }
]

post_params.each do |post|
  Post.find_or_create_by!(title: post[:title]) do |p|
    p.title = post[:title]
    p.details = post[:details]
    p.user_id = User.first.id
  end
end
puts "postの初期データ導入完了"

puts "全てのデータ導入完了"
