import { NextJS } from "@loopholelabs/scale-http-adapters";
import { New } from "@loopholelabs/scale";
import header from "./shivanshvij-header-middleware-latest.scale"
import regex from "./shivanshvij-regex-replace-latest.scale"
import insight from "./insight-latest.scale"

export const config = {
  runtime: 'edge',
};

const handler = (new NextJS(New([header, regex]))).Handler();

export default async (req) => {
  return await handler(req);
};