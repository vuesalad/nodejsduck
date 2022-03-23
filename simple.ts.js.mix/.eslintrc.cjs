module.exports = {
  root: true,
  extends: ["eslint:recommended", 
   "airbnb", 
   "prettier"],
  rules: {
    "global-require": 0,
    // windows linebreaks when not in production environment
    "linebreak-style": [
      "error",
      require("os").EOL === "\r\n" ? "windows" : "unix",
    ],
  },

  overrides: [{
    files: ["*.ts", "*.tsx"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.eslint.json'],
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
     "airbnb", 
     'airbnb-typescript',
     'plugin:@typescript-eslint/recommended',
     'plugin:@typescript-eslint/recommended-requiring-type-checking',
     "prettier"],
  }]

};
