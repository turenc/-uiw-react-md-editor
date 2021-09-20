import { join } from "path";

import CopyPlugin from "copy-webpack-plugin";

import { rootDir } from "../utils/env-var-helper";

const config = {
  patterns: [{from: join(rootDir, 'public/images'), to: 'images'},
             {from: join(rootDir, 'public/fonts'), to: 'fonts'}],
};

export const copyPlugin = new CopyPlugin(config);
