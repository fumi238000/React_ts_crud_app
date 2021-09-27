require "rails_helper"

RSpec.describe "V1::Auth::Passwords", type: :request do
  describe "POST /update" do
    subject { put(v1_user_password_path, params: params, headers: headers) }

    let(:current_user) { create(:user) }
    let(:headers) { current_user.create_new_auth_token }

    context "パラメータが正常な場合" do
      let(:params) { attributes_for(:password_params, now_password: current_user.password) }
      it "パスワードが更新できる" do
        subject
        expect(response).to have_http_status(:ok)
        # TOOD: パスワードが更新されたことを検証するテストを追加する
      end
    end

    context "パラメータが異常な場合" do
      let(:params) { attributes_for(:password_params, :invalid_params, now_password: current_user.password) }
      it "更新できない" do
        subject
        expect(response).to have_http_status(:unprocessable_entity)
        # TODO: パラメータの条件別テストの実装
      end
    end
  end
end
