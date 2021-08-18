source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.6"

gem "active_model_serializers"
gem "bootsnap", ">= 1.4.4", require: false
gem "devise"
gem "devise_token_auth"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "rack-cors"
gem "rails", "~> 6.1.4"
gem "rails-i18n"

group :development, :test do
  gem "byebug", platforms: %i[mri mingw x64_mingw]
  gem "factory_bot_rails"
  gem "faker"
  gem "pre-commit", require: false
  gem "pry-byebug"
  gem "pry-doc"
  gem "rspec-rails"
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
end

group :development do
  gem "listen", "~> 3.3"
  gem "spring"
end

gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
