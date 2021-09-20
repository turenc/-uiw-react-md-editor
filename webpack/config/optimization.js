export default {
  runtimeChunk: 'single',
  moduleIds: 'deterministic',
  splitChunks: {
    automaticNameDelimiter: "~",
    usedExports: true,
    chunks: "async",
    maxSize: 1000000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      react: {
        test: /[\\/]node_modules[\\/]react[\\/]/,
        name: "react",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      reactDom: {
        test: /[\\/]node_modules[\\/]react-dom[\\/]/,
        name: "react-dom",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      antd: {
        test: /[\\/]node_modules[\\/]antd[\\/]/,
        name: "antd",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      antDesignIconsLib: {
        test: /[\\/]node_modules[\\/]@ant-design/,
        name: "ant-design",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      mermaid: {
        test: /[\\/]node_modules[\\/]mermaid[\\/]/,
        name: "mermaid",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      reactExcelRenderer: {
        test: /[\\/]node_modules[\\/]react-excel-renderer[\\/]/,
        name: "react-excel-renderer",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      fontawesome: {
        test: /[\\/]node_modules[\\/]fontawesome[\\/]/,
        name: "fontawesome",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      lodash: {
        test: /[\\/]node_modules[\\/]lodash[\\/]/,
        name: "lodash",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      prettier: {
        test: /[\\/]node_modules[\\/]prettier[\\/]/,
        name: "prettier",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      src: {
        test: /[\\/]src[\\/]/,
        name: "src",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all"
      },
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendor",
        enforce: true,
        reuseExistingChunk: true,
        chunks: "all",
        minChunks: 2
      }
    }
  }
};
