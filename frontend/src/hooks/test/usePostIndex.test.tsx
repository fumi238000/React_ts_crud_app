import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw"
import { setupServer } from "msw/node"

import { usePostIndex } from "../usePostIndex";
import { postsIndexUrl } from "../../urls";

// TODO: このテスト必要か再度検討する
const server = setupServer(
  rest.get(postsIndexUrl, (req,res,ctx)=>{
  return res(ctx.status(200), ctx.json({title: "Bred dumy"}))
}),

beforeAll(()=> server.listen()),
afterEach(()=> {
  server.resetHandlers();
  cleanup();
}),
afterAll(()=>server.close());

describe("usePostIndex CustumHooks", () => {
  it("getPostsが呼ばれた時、Post一覧を返す", async () => {
  });
});
