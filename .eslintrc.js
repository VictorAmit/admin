module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    trailingComma: "all",
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "ignore",
        endOfLine: "auto"
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any"
        }
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
