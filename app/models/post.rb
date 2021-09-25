class Post < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 8 }
  validates :details, presence: true, length: { maximum: 30 }

  def self.posts_index
    includes(:user).order(id: :desc)
  end
end
