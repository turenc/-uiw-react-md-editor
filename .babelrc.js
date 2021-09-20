module.exports = (api) => {
  const mode = process.env.NODE_ENV ?? "production";

  // This caches the Babel config by environment.
  api.cache.using(() => mode);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: [">1%", "last 4 versions", "not ie < 9"]
          },
          useBuiltIns: "usage",
          debug: false,
          corejs: 3
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: [
      ["babel-plugin-module-resolver", { alias: { "~": "./" } }][("module-resolver", { root: ["./", "packages/*"], extensions: [".tsx", ".ts", ".js", ".jsx"] })],
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-proposal-object-rest-spread",
      "babel-plugin-root-import",
      "@babel/plugin-transform-typescript",
      ["@babel/plugin-transform-modules-commonjs", { allowTopLevelThis: true }],
      ["@babel/plugin-transform-runtime", { regenerator: true }],
      "dynamic-import-node"
      // Applies the react-refresh Babel plugin on non-production modes only
      //mode !== "production" && "react-refresh/babel"
    ].filter(Boolean),
    env: {
      production: {
        plugins: ["transform-remove-console", "minify-dead-code-elimination"]
      }
    }
  };
};
