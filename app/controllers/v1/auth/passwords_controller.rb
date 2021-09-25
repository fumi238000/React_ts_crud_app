module V1
  module Auth
    class PasswordsController < DeviseTokenAuth::PasswordsController
      before_action :authenticate_v1_user!, only: %i[update]
      before_action :set_params, only: %i[update]

      def update
        if !chack_input_password
          render json: { messages: "新しいパスワードが一致しません" }, status: :unprocessable_entity
        elsif !chack_same_password
          render json: { messages: "現在のパスワードと新しいパスワードが同じです。" }, status: :unprocessable_entity
        elsif !check_now_password
          render json: { messages: "現在のパスワードが一致しません" }, status: :unprocessable_entity
        else
          super
        end
      end

      private

      def resource_params
        params.permit(:now_password, :password, :password_confirmation, :reset_password_token)
      end

      def set_params
        @params = resource_params
      end

      def chack_input_password
        params[:password] == params[:password_confirmation]
      end

      def chack_same_password
        params[:password] != params[:now_password]
      end

      def check_now_password
        current_v1_user.valid_password?(@params[:now_password])
      end
    end
  end
end
