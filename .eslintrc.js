module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ["prettier"],
  plugins: ["@typescript-eslint/eslint-plugin", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "none"
    }],
  }
}
