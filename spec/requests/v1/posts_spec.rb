require "rails_helper"

RSpec.describe "V1::Posts", type: :request do
  let(:current_user) { create(:user) }
  let(:headers) { current_user.create_new_auth_token }
  let(:user) { create(:user) }

  describe "GET #index" do
    subject { get(v1_posts_path, headers: headers) }

    context "トークン認証情報がない場合" do
      subject { get(v1_posts_path) }
      let!(:post) { create(:post, user_id: current_user.id) }
      xit "エラーする" do
        subject
        expect(response).to have_http_status(:unauthorized)
      end
    end

    before { create_list(:post, 3, user_id: current_user.id) }
    context "ユーザーの投稿が存在するとき" do
      it "投稿一覧を取得できること" do
        subject
        json = JSON.parse(response.body)
        expect(response).to have_http_status(:ok)
        expect(json.size).to eq 3
        expect(json[0].keys).to eq %w[id title details]
        expect(json[0]["id"]).to eq Post.first.id
        expect(json[0]["title"]).to eq Post.first.title
        expect(json[0]["details"]).to eq Post.first.details
      end
    end
  end

  describe "POST #create" do
    before { create(:user) }
    subject { post(v1_posts_path, params: post_params) }
    let(:post_params) { { post: attributes_for(:post) } }

    # TODO: ログイン機能実装後に実装
    # context 'トークン認証情報がない場合' do
    #   subject { post(v1_posts_path, params: post_params) }
    #   it 'エラーする' do
    #     subject
    #     expect(response).to have_http_status(:unauthorized)
    #   end
    # end

    context "パラメータが正常なとき" do
      it "データが保存されること" do
        expect { subject }.to change { Post.count }.by(1)
        expect(response).to have_http_status(:ok)
      end
    end

    context "パラメータが異常なとき" do
      let(:post_params) { { post: attributes_for(:post, :invalid, user_id: 1) } }
      it "データが保存されないこと" do
        expect { subject }.not_to change { Post.count }.by(0)
        expect(response).to have_http_status(:unprocessable_entity)
        json = JSON.parse(response.body)
        expect(json["title"]).to include "を入力してください"
        expect(json["details"]).to include "を入力してください"
      end
    end
  end
end
