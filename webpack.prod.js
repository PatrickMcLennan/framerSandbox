/* eslint-disable */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const merge = require(`webpack-merge`);
const { ProgressPlugin } = require("webpack");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require(`script-ext-html-webpack-plugin`);
const TerserPlugin = require(`terser-webpack-plugin`);

module.exports = merge(common, {
  mode: `production`,
  output: {
    filename: `app.[contenthash].js`,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        loader: [`babel-loader`],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
      }),
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./src/template.html`,
      inject: `head`,
      meta: {
        "application-name": "Framer stuff",
        robots: "index,follow",
        googlebot: "index,follow",
        rating: "general",
        "theme-color": "#232325",
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: `defer`,
    }),
    new ResourceHintWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
});
