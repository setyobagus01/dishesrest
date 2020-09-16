const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    category: "./src/category.js",
    search: "./src/search.js",
    details: "./src/details.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      excludeChunks: ["category", "search", "details"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/category.html",
      filename: "category.html",
      chunks: ["category"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/search.html",
      filename: "search.html",
      chunks: ["search"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/details.html",
      filename: "details.html",
      chunks: ["details"],
    }),
  ],
};
