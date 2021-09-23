import { devServerConfig } from "./dev-server-config";
import * as plugins from "../plugins";

export default {
  devServer: devServerConfig,
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1000,
    ignored: '**/node_modules',
    followSymlinks: true
  },
  plugins: [plugins.reactRefreshWebpackPlugin]
};
