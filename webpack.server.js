const path = require("path");
const {merge} = require('webpack-merge');
const baseConfiguration = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const configServer = {
  //TODO: Inform Webpack that we're building a bundle
  // for nodeJS, rather than for browser
  target: "node",

  //TODO: Tell webpack the root file of our server application
  entry: "./src/app.js",
  //TODO: Create the output build.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfiguration, configServer)