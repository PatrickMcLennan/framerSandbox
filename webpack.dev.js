/* eslint-disable */

const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: `development`,
  entry: ["babel-polyfill", `./src/index.ts`],
  devServer: {
    historyApiFallback: true,
    open: true,
    overlay: true,
    port: 8080,
    stats: `minimal`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        loader: [`babel-loader`, `stylelint-custom-processor-loader`],
      },
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        loader: `source-map-loader`,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/template.html`,
      inject: `body`,
    }),
  ],
  devtool: `source-map`,
});
