import { join } from "path";

import ESLintPlugin from "eslint-webpack-plugin";
const eslintFormatter = require('react-dev-utils/eslintFormatter');
import { rootDir } from "../utils/env-var-helper";

const config = {
  extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
  formatter: eslintFormatter,
  eslintPath: require.resolve('eslint'),
  failOnError: false,
  emitWarning: true,
  cache: true,
  resolvePluginsRelativeTo: __dirname,
  baseConfig: {
    extends: [require.resolve('eslint-config-react-app/base')],
  },
  context: join(rootDir, "src"),
  extensions: ["js", "jsx", "ts", "tsx"],
  outputReport: false,
  quiet: true,
  fix: true
}

export const esLintPlugin = new ESLintPlugin(config);