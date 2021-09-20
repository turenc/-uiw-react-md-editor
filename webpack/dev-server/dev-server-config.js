import isWindows from "is-windows";
import { join } from "path";
import { devServerProxyConfig } from "./dev-server-proxy-config";

const defaultPort = 3002;

const devServerHost = isWindows() ? "localhost" : "0.0.0.0";

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
  // contentBase: join(__dirname, "../../public/"),
  // publicPath: "/",
  port: defaultPort,
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" },
  proxy: devServerProxyConfig,
  hot: true,
  // overlay: false,
  host: devServerHost,
  open: true,
  // writeToDisk: true,
  compress: true,
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
  },
};
