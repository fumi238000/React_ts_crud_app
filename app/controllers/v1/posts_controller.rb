module V1
  class PostsController < ApplicationController
    def index
      posts = Post.order(id: :asc)
      render json: posts
    end
  end
end
