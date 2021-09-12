const path = require("path");
const {merge} = require('webpack-merge');
const baseConfiguration = require('./webpack.base.js')
const clientConfiguration = {
  //TODO: Tell webpack the root file of our server application
  entry: "./src/client/index.js",
  //TODO: Create the output build.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfiguration, clientConfiguration);
