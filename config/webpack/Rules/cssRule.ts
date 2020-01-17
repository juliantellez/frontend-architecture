import { Rule } from "webpack";

const cssRule: Rule = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: "[name]___[local]___[hash:base64:5]",
        camelCase: true,
        url: true,
        import: true
      }
    },
    {
      loader: "sass-loader"
    }
  ]
};

export default cssRule;
