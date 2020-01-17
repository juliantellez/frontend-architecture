import * as path from "path";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

import jsRule from "./Rules/jsRule";
import cssRule from "./Rules/cssRule";

const PATH_ROOT = path.resolve(__dirname, "..", "..");
const PATH_SRC = path.resolve(PATH_ROOT, "src", "main");
const PATH_BUILD = path.resolve(PATH_ROOT, "dist");

const createWebpackConfig = (): Configuration => {
  return {
    mode: "development",
    devtool: "inline-source-map",
    entry: PATH_SRC,
    output: {
      path: PATH_BUILD,
      filename: "[name].js"
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    module: {
      rules: [jsRule, cssRule]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(PATH_ROOT, "assets", "index.html")
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(PATH_ROOT, "assets", "fonts"),
          to: path.join(PATH_ROOT, "dist", "assets", "fonts")
        }
      ])
    ],
    devServer: {
      compress: true,
      contentBase: PATH_SRC,
      hot: true,
      port: 3000,
      historyApiFallback: true
    }
  };
};

export default createWebpackConfig;
