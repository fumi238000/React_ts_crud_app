module V1
  class PostsController < ApplicationController
    def index
      posts = Post.order(id: :asc)
      render json: posts
    end

    def create
      # TODO: ログインユーザーの値を参照するように修正
      post = Post.new(post_params)

      if post.save
        render json: post
      else
        render json: post.errors, status: :unprocessable_entity
      end
    end

    private

    def post_params
      # TODO: ログインユーザーの値を参照するように修正
      params.require(:post).permit(:title, :details).merge(user_id: User.first.id)
    end
  end
end
