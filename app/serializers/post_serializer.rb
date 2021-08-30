class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :user_id
  belongs_to :user
end
