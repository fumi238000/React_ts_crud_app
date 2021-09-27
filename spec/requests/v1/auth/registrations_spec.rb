require "rails_helper"

RSpec.describe "V1::Auth::Registrations", type: :request do
  # 新規登録
  describe "POST /v1/auth" do
    subject { post(v1_user_registration_path, params: params) }

    context "パラメータが妥当な場合" do
      let(:params) { attributes_for(:user) }
      it "新規登録ができること" do
        expect { subject }.to change { User.count }.by(1)
        expect(response).to have_http_status(:ok)
        res = JSON.parse(response.body)
        expect(res["data"]["email"]).to eq(User.last.email)
      end

      it "本人認証として使用されるheader情報を取得することができること" do
        subject
        header = response.header
        expect(header["access-token"]).to be_present
        expect(header["client"]).to be_present
        expect(header["expiry"]).to be_present
        expect(header["uid"]).to be_present
        expect(header["token-type"]).to be_present
      end
    end

    context "パラメータが不正な場合" do
      context "emailが存在しないとき" do
        let(:params) { attributes_for(:user, email: nil) }
        it "エラーが発生する" do
          expect { subject }.to change { User.count }.by(0)
          res = JSON.parse(response.body)
          expect(response).to have_http_status(:unprocessable_entity)
          expect(res["errors"]["email"][0]).to include "を入力してください"
        end
      end

      context "passwordが存在しないとき" do
        let(:params) { attributes_for(:user, password: nil) }
        it "エラーが発生する" do
          expect { subject }.to change { User.count }.by(0)
          res = JSON.parse(response.body)
          expect(response).to have_http_status(:unprocessable_entity)
          expect(res["errors"]["password"][0]).to include "を入力してください"
        end
      end
    end
  end

  # ユーザー更新
  describe "PUT /v1/auth" do
    subject { put(v1_user_registration_path, params: params, headers: headers) }

    let(:current_user) { create(:user) }
    let(:headers) { current_user.create_new_auth_token }

    context "パラメータが正常な場合" do
      let(:params) { attributes_for(:user_params) }
      it "更新できる" do
        new_user = params
        expect { subject }.to change { current_user.reload.name }.from(current_user.name).to(new_user[:name])
                                                                 .and change { current_user.reload.email }.from(current_user.email).to(new_user[:email])
        expect(response).to have_http_status(:ok)
      end
    end

    context "パラメータが異常な場合" do
      let(:params) { attributes_for(:user_params, :invalid_params) }
      it "更新できない" do
        subject
        expect(response).to have_http_status(:unprocessable_entity)
        # TODO: ワンライナーにしたい。
        expect { current_user.reload }.not_to change(current_user, :name)
        expect { current_user.reload }.not_to change(current_user, :email)
      end
    end
  end
end
