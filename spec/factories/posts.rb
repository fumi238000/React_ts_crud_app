FactoryBot.define do
  factory :post do
    user { nil }
    title { "MyString" }
    details { "MyText" }
  end
end
