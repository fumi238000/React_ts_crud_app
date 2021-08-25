require "rails_helper"

RSpec.describe "V1::Posts", type: :request do
  let(:current_user) { create(:user) }
  let(:headers) { current_user.create_new_auth_token }
  let(:user) { create(:user) }

  describe "GET #index" do
    subject { get(v1_posts_path, headers: headers) }

    # context "トークン認証情報がない場合" do
    #   subject { get(v1_posts_path) }
    #   let!(:post) { create(:post, user_id: current_user.id) }
    #   xit "エラーする" do
    #     subject
    #     expect(response).to have_http_status(:unauthorized)
    #   end
    # end

    before { create_list(:post, 3, user_id: current_user.id) }
    context "ユーザーの投稿が存在するとき" do
      it "投稿一覧を取得できること" do
        subject
        json = JSON.parse(response.body)
        expect(response).to have_http_status(:ok)
        expect(json.size).to eq 3
        expect(json[0].keys).to eq %w[id title details]
        expect(json[0]["id"]).to eq Post.last.id
        expect(json[0]["title"]).to eq Post.last.title
        expect(json[0]["details"]).to eq Post.last.details
      end
    end
  end

  describe "POST #create" do
    before { create(:user) }
    subject { post(v1_posts_path, params: post_params) }
    let(:post_params) { { post: attributes_for(:post, user_id: User.first.id) } }

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

    # context "パラメータが異常なとき" do
    #   let(:post_params) { { post: attributes_for(:post, :invalid) } }
    #   it "データが保存されないこと" do
    #     # expect { subject }.not_to change { Post.count }.by(0)
    #     expect(response).to have_http_status(:unprocessable_entity)
    #     json = JSON.parse(response.body)
    #     expect(json["title"]).to include "を入力してください"
    #     expect(json["details"]).to include "を入力してください"
    #   end
    # end
  end

  describe "PATCH #update" do
    subject { patch(v1_post_path(post_id), params: post_params) }
    let(:post) { create(:post, user_id: current_user.id) }
    let(:post_id) { post.id }

    # context "トークン認証情報がない場合" do
    #   subject { patch(v1_post_path(post_id), params: post_params) }
    #   let(:post_params) { { post: attributes_for(:post, user_id: current_user.id) } }
    #   it "エラーする" do
    #     subject
    #     expect(response).to have_http_status(:unauthorized)
    #   end
    # end

    context "パラメータが正常の時 && 本人の投稿の場合" do
      let(:post_params) { { post: attributes_for(:post, user_id: current_user.id) } }
      it "投稿が更新されること" do
        new_post = post_params[:post]
        expect { subject }
          .to change { post.reload.title }
          .from(post.title).to(new_post[:title])
          .and change { post.reload.details }
          .from(post.details).to(new_post[:details])
        expect(response).to have_http_status(:ok)
      end
    end

    # context "パラメータが正常の時 && 本人以外の投稿の場合" do
    #   let(:post_params) { { post: attributes_for(:post, user_id: user.id) } }
    #   let(:other_post) { create(:post, user_id: user.id) }
    #   let(:post_id) { other_post.id }
    #   it "エラーする" do
    #     expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
    #   end
    # end

    # context "パラメータが異常なとき" do
    #   let(:post_params) { { post: attributes_for(:post, :invalid, user_id: current_user.id) } }
    #   it "投稿が更新されないこと" do
    #     # expect { subject }.not_to change { post.reload.title }
    #     # expect { subject }.not_to change { post.reload.details }
    #     expect(response).to have_http_status(:unprocessable_entity)
    #     json = JSON.parse(response.body)
    #     expect(json["title"]).to include "を入力してください"
    #     expect(json["details"]).to include "を入力してください"
    #   end
    # end
  end

  describe "DELETE #destroy" do
    subject { delete(v1_post_path(post.id), headers: headers) }

    context "本人の投稿の場合" do
      let!(:post) { create(:post) }
      xit "投稿が削除されること" do
        expect { subject }.to change { Post.count }.by(-1)
        expect(response).to have_http_status(:no_details)
      end
    end

    # context "本人以外の投稿の場合" do
    #   let!(:post) { create(:post, user_id: user.id) }
    #   it "エラーする" do
    #     expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
    #   end
    # end

    # context "トークン認証情報がない場合" do
    #   subject { delete(v1_post_path(post.id)) }
    #   let!(:post) { create(:post, user_id: current_user.id) }
    #   it "エラーする" do
    #     subject
    #     expect(response).to have_http_status(:unauthorized)
    #   end
    # end
  end
end
