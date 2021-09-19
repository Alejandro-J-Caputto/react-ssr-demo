const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const webpack = require("webpack");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              { targets: { browsers: ["last 2 versions"] } },
            ],
          ],
        },
      },
      // {
      //   type: "javascript/auto",
      //   test: /\.mjs$/,
      //   use: [],
      // },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash][ext]",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new webpack.IgnorePlugin({
    //   resourceRegExp: /^encoding$/,
    //   contextRegExp: /node-fetch/,
    // }),
  ],
};
