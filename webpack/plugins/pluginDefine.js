import { DefinePlugin } from "webpack";

import { isDev, isDevServer, isProd, env } from "../utils/env-var-helper";

const config = {
  'process.env.NODE_ENV' : JSON.stringify(env),
  'IS_PROD': isProd,
  'IS_DEV': isDev,
  'IS_DEV_SERVER': isDevServer
};

export const definePlugin = new DefinePlugin(config);
