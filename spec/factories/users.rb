FactoryBot.define do
  factory :user do
    name { Faker::Lorem.characters(number: 8) }
    email { Faker::Internet.free_email }
    password { Faker::Internet.password(min_length: 8) }

    trait :user_invalid do
      name { Faker::Lorem.characters(number: 8) }
      email { Faker::Internet.free_email }
      password { Faker::Internet.password(min_length: 8) }
    end
  end

  factory :user_params, class: :user do
    name { Faker::Lorem.characters(number: 8) }
    email { Faker::Internet.free_email }

    trait :invalid_params do
      name { nil }
      email { nil }
    end
  end

  factory :password_params, class: :user do
    password { Faker::Internet.password(min_length: 8) }
    password_confirmation { password }

    trait :invalid_params do
      password { nil }
      conform_password { nil }
    end
  end
end
