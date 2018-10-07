var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["env", "react"],
              plugins: [
                 "transform-decorators-legacy",
                "transform-class-properties",
                "syntax-object-rest-spread"
              ]
            }
          }
        }
      ] 
    }
};
