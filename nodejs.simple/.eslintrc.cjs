module.exports = {
  extends: ["eslint:recommended", "plugin:node/recommended", "airbnb", "prettier"],

  rules: {
    "global-require": 0,
    // windows linebreaks when not in production environment
    "linebreak-style": [
      "error",
      require("os").EOL === "\r\n" ? "windows" : "unix",
    ],
  },
};
