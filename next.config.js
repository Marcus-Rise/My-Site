/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");
// const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = withOffline(
  withCSS({
    exportPathMap: function() {
      return {
        "/": { page: "/" }
      };
    },

    webpack(config) {
      /*if (config.mode === "production") {
        config.plugins = [
          new MiniCssExtractPlugin(),
          new webpack.DefinePlugin({
            // <-- key to reducing React's size
            "process.env": {
              NODE_ENV: JSON.stringify("production")
            }
          }),
          new webpack.optimize.AggressiveMergingPlugin() //Merge chunk
        ];
      }*/

      return config;
    }
  })
);
