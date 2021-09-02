module V1
  class PostsController < ApplicationController
    before_action :set_post, only: %i[update destroy]

    def index
      # posts = Post.order(id: :asc)
      posts = Post.includes(:user).order(id: :asc)
      render json: posts, include: { user: [:name] }
    end

    def create
      post = current_v1_user.posts.new(post_params)

      if post.save
        render json: post
      else
        render json: post.errors, status: :unprocessable_entity
      end
    end

    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @post.destroy!
    end

    private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :details)
    end
  end
end
