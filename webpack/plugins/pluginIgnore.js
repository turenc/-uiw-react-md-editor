import { IgnorePlugin } from "webpack";

export const ignorePlugin = new IgnorePlugin({
  resourceRegExp: /^\.\/locale$/,
  contextRegExp: /moment$/,
});