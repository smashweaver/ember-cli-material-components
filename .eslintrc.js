module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "no-cond-assign": 1,
    "no-extra-semi": 1,
    "no-unused-vars": 1,
    "no-empty": 1
  }
};
