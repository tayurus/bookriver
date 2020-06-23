

module.exports = {
  extends: ["airbnb-typescript"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    ...require("./airbnb-typescript.rules.js"),
    "import/extensions": "off",
    "@typescript-eslint/dot-notation": "off",
    "import/prefer-default-export": "off",
  },
};
