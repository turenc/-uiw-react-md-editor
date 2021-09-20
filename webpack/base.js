import path from "path";
import { devServerUrl } from "./config";
import entry from "./config/entry";
import * as plugins from "./plugins";
import * as rules from "./rules";
import { isDevServer, isProd } from "./utils/env-var-helper";
import { arrayFilterEmpty } from "./utils/helpers";
import { externalItems } from "./config";
import optimization from "./config/optimization";

export default {
  context: __dirname,
  mode: isProd ? "production" : "development",
  entry,
  output: {
    path: path.join(__dirname, "../build/"),
    publicPath: isDevServer ? devServerUrl : "/",
    filename: isDevServer ? "[name].[fullhash].js" : "[name].[contenthash].js"
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  module: {
    rules: arrayFilterEmpty([rules.mjsRule, rules.typescriptRule, rules.htmlRule, rules.imagesRule, rules.fontsRule, rules.cssRule, ...rules.lessRules, ...rules.sassRules, ...rules.svgRules])
  },
  plugins: arrayFilterEmpty([
    plugins.htmlWebpackPlugin,
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.forkTsCheckerWebpackPlugin,
    plugins.esLintPlugin,
    plugins.nodePolyfillPlugin,
    plugins.duplicatePackageCheckerPlugin,
    plugins.caseSensitivePathsPlugin,
    plugins.moduleNotFoundPlugin,
    plugins.cleanWebpackPlugin,
    plugins.ignorePlugin
  ]),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", 'web.mjs', 'mjs', 'web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx'],
    fallback: {
      fs: false
    }
  },
  resolveLoader: {
    plugins: [
      plugins.pnpWebpackPlugin,
    ],
  },
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, ".temp_cache"),
    hashAlgorithm: "md4"
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  externals: externalItems,
  optimization
};
