FactoryBot.define do
  factory :post do
    association :user, factory: :user
    title { Faker::Lorem.characters(number: 8) }
    details { Faker::Lorem.characters(number: 30) }

    trait :invalid do
      title { nil }
      details { nil }
    end
  end
end
