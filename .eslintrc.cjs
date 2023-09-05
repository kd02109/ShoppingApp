module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  ignorePatterns: ["!.storybook"],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        parser: 0,
      },
    ],

    "react-hooks/exhaustive-deps": 0, //uesEffect deps
    "no-unused-vars": 0, //사용하지 않는 변수
    "no-fallthrough": 0, //case문 default
    "@typescript-eslint/no-non-null-assertion": 0,
  },
};
