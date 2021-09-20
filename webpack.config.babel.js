import merge from "webpack-merge";

import baseConfig from "./webpack/base";
import devConfig from "./webpack/env/dev";
import prodConfig from "./webpack/env/prod";

import devServer from "./webpack/dev-server/dev-server";
import buildFolder from "./webpack/build-folder/build-folder";

import bundleAnalyzer from "./webpack/analyzer/bundle-analyzer";
import staticCodeAnalyzer from "./webpack/analyzer/static-code-analyzer";

import { isProd, isDev, isDevServer, isBundleAnalyzer, isStaticCodeAnalyzer } from "./webpack/utils/env-var-helper";

export default () => 
    merge
    (
        isDevServer ? devServer : buildFolder,
        merge
        (
            isStaticCodeAnalyzer ? staticCodeAnalyzer : {},
            merge
            (
                isBundleAnalyzer ? bundleAnalyzer : {},
                (
                    isProd ? merge
                    (
                        baseConfig, prodConfig
                    ) :
                    isDev ? merge
                    (
                        baseConfig, devConfig
                    ) :
                    baseConfig
                )
            )
        )
    );
