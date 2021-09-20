import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const config = {
  analyzerPort: 20101,
  analyzerHost: "localhost",
  openAnalyzer: true
};

export const bundleAnalyzerPlugin = new BundleAnalyzerPlugin(config);
