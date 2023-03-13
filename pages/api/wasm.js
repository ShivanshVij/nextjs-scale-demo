import { NextJS } from "@loopholelabs/scale-http-adapters";
import { New, Func } from "@loopholelabs/scale";
import header from "./shivanshvij-header-middleware-latest.scale"
import headerModule from "./shivanshvij-header-middleware-latest.wasm?module"
import regex from "./shivanshvij-regex-replace-latest.scale"
import regexModule from "./shivanshvij-regex-replace-latest.wasm?module"

export const config = {
  runtime: 'edge',
};

const regexFunc = new Func(regex, regexModule);
const headerFunc = new Func(header, headerModule);

const handler = (new NextJS(New([headerFunc, regexFunc]))).Handler();

export default async (req) => {
  return await handler(req);
};