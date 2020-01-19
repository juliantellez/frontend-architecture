const eslintRules = require('./config/lint/eslint')
const tsRules = require('./config/lint/typescript')

const config = {
  parser: "@typescript-eslint/parser",
  rules: Object.assign({}, eslintRules, tsRules),
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

module.exports = config;
