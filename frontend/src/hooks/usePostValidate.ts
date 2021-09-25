import { useState } from "react";

export const usePostValidate = () => {
  const maxTitleLength = 8;
  const maxDetailsLength = 30;

  const [inputPostTitleError, setInputPostTitleError] = useState<string>("");
  const [inputPostDetailsError, setInputPostDetailsError] =
    useState<string>("");

  const validatePostTitle = (title: string) => {
    let error = "";
    if (!title) {
      error = "タイトルを入力してください";
    } else if (title.length > maxTitleLength) {
      error = `タイトルは${maxTitleLength}文字以下で入力してください`;
    }
    setInputPostTitleError(error);
  };

  const validatePostDetails = (details: string) => {
    let error = "";
    if (!details) {
      error = "詳細を入力してください";
    } else if (details.length > maxDetailsLength) {
      error = `詳細は${maxDetailsLength}文字以下で入力してください`;
    }
    setInputPostDetailsError(error);
  };

  return {
    validatePostTitle,
    inputPostTitleError,
    validatePostDetails,
    inputPostDetailsError,
  };
};
