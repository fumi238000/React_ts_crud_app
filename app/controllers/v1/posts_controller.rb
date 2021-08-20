module V1
  class PostsController < ApplicationController
    def index
      posts = Post.order(id: :desc)
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
      params.require(:post).permit(:title, :details, :user_id)
    end
  end
end
