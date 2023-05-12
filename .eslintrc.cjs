module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@tanstack/eslint-plugin-query/recommended"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/prop-types": 0, //prop type 무시 설정 typescript를 사용하지 않고 있기 때문에!
  },
};
