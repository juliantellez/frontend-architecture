import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";
import { EnvironmentPlugin, Plugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import IEnv from "../Interfaces/IEnv";

const PATH_ROOT = path.resolve(__dirname, "..", "..");

const createWebpackPluginsArray = (env: IEnv): Plugin[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.join(PATH_ROOT, "assets", "index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(PATH_ROOT, "assets", "fonts"),
        to: path.join(PATH_ROOT, "dist", "assets", "fonts")
      }
    ]),
    new EnvironmentPlugin({
      NODE_ENV: env.NODE_ENV
    })
  ];

  if (env.analyze) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: true
      })
    );
  }

  if (env.NODE_ENV !== "production") {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
};

export default createWebpackPluginsArray;
