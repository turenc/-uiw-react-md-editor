import { join } from "path";

export const isDevServer = process.env.SERVE === "true";

export const isBundleAnalyzer = process.env.BUNDLE_ANALYZER === "true";

export const isStaticCodeAnalyzer = process.env.LINT === "true";

export const env = process.env.NODE_ENV ?? "production";

export const isProd = env === "production";
export const isDev = env === "development";

export const rootDir = join(__dirname, "../../");
export const webpackDir = join(__dirname, "../");
