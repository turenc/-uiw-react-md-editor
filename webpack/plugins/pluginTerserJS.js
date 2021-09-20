import TerserJSPlugin from "terser-webpack-plugin";

const config = {
    extractComments: 'all',
    parallel: true,
    terserOptions: {
        // ecma: undefined,
        parse: {},
        compress: {},
        mangle: true, // Note `mangle.properties` is `false` by default.
        module: true,
        toplevel: false,
        ie8: true,
        keep_fnames: false,
        safari10: true,
      },
}



export const terserJSPlugin = new TerserJSPlugin(config);