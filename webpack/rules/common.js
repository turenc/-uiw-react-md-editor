import { babelLoader } from "./useLoaderRuleItems";
const path = require('path');
const fs = require('fs');
import { isDev, isProd } from "../utils/env-var-helper";
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export const typescriptRule = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: resolveApp('src'),
  loader: require.resolve('babel-loader'),
  options: {
    customize: require.resolve(
      'babel-preset-react-app/webpack-overrides'
    ),
    presets: [
      [
        require.resolve('babel-preset-react-app')
      ],
    ],
    plugins: [
      [
        require.resolve('babel-plugin-named-asset-import'),
        {
          loaderMap: {
            svg: {
              ReactComponent:
                '@svgr/webpack?-svgo,+titleProp,+ref![path]',
            },
          },
        },
      ],
      isDev &&
        require.resolve('react-refresh/babel'),
    ].filter(Boolean),
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
    // See #6846 for context on why cacheCompression is disabled
    cacheCompression: false,
    compact: isProd,
  },
};

export const mjsRule = 
{ 
  test: /\.m?js/, 
  type: "javascript/auto" ,
  resolve: {
    fullySpecified: false
  },
  include: /node_modules/
};
/**
 * @see https://webpack.js.org/loaders/html-loader
 */
export const htmlRule = {
  test: /\.(html)$/,
  use: {
    loader: "html-loader"
  },
  exclude: /node_modules/,
  resolve: {
    fullySpecified: false
  }
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const imagesRule = {
  test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
  type: "asset/resource"
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const fontsRule = {
  test: /\.(woff(2)?|eot|ttf|otf|)$/,
  type: "asset/inline"
};
