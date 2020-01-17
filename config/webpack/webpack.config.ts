import * as path from "path";
import { Configuration } from "webpack";

import IEnv from "../Interfaces/IEnv";

import jsRule from "./Rules/jsRule";
import cssRule from "./Rules/cssRule";
import createWebpackPluginsArray from "./createPluginsArray";

const PATH_ROOT = path.resolve(__dirname, "..", "..");
const PATH_SRC = path.resolve(PATH_ROOT, "src", "main");
const PATH_BUILD = path.resolve(PATH_ROOT, "dist");

const createWebpackConfig = (env: IEnv): Configuration => {
  return {
    mode: env.NODE_ENV,
    devtool: env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
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
    plugins: createWebpackPluginsArray(env),
    optimization: {
      minimize: env.NODE_ENV === "production" ? true : false,
      splitChunks: {
        chunks: "initial",
        cacheGroups: {
          vendors: false,
          default: false
        } as any
      }
    },
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
