var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/
      }
    ]
  }
};
