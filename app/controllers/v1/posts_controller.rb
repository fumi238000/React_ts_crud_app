module V1
  class PostsController < ApplicationController
    before_action :authenticate_v1_user!, only: %i[index create update destroy]
    before_action :set_user_post, only: %i[index create]
    before_action :set_post, only: %i[update destroy]

    def index
      posts = @user_posts.posts_index
      render json: posts, include: { user: [:name] }
    end

    def create
      post = @user_posts.new(post_params)

      if post.save
        render json: post
      else
        render json: post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @post.destroy!
    end

    private

    def set_user_post
      @user_posts = current_v1_user.posts
    end

    def set_post
      @post = current_v1_user.posts.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :details)
    end
  end
end
