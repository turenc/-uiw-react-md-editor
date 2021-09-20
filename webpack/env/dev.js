import * as plugins from "../plugins";

export default {
  devtool: "cheap-module-source-map",
  plugins: [plugins.reactRefreshWebpackPlugin]
};