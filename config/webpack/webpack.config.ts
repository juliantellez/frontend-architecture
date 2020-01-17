import * as path from "path";
import { Configuration } from "webpack";

import jsRule from "./Rules/jsRule";
import cssRule from "./Rules/cssRule";

const PATH_SRC = path.resolve(__dirname, '..', '..', 'src', 'main');
const PATH_BUILD = path.resolve(__dirname, '..', '..', 'dist');

const createWebpackConfig = (): Configuration => {
  return {
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
    }
  };
};

export default createWebpackConfig;
