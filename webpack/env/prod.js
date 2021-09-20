import * as plugins from "../plugins";

export default {
  optimization: {
    minimize: true,
    minimizer: [plugins.terserJSPlugin]
  },
  plugins: [plugins.miniCssExtractPlugin],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
