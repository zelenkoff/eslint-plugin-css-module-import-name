'use strict';

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:eslint-plugin/recommended', 'plugin:node/recommended'],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true }
    }
  ]
};
