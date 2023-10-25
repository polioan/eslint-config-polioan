# eslint-config-polioan

[![version](https://img.shields.io/npm/v/eslint-config-polioan)](https://www.npmjs.com/package/eslint-config-polioan)
[![license](https://img.shields.io/github/license/polioan/eslint-config-polioan)](https://opensource.org/licenses/MIT)

Shared ESlint config 'polioan'

## Install

```shell
npm i eslint @typescript-eslint/parser eslint-config-polioan
```

## Example .eslintrc.cjs

```js
'use strict'

const path = require('node:path')

const {
  commonJsExtensions,
  jsExtensions,
} = require('eslint-config-polioan/common/constants')

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'polioan/configurations/comments',
    'polioan/configurations/general',
    'polioan/configurations/generalTypes',
    'polioan/configurations/jsx',
    'polioan/configurations/regex',
    'polioan/configurations/spellcheck',
    'polioan/configurations/cssModules',
    'polioan/configurations/react',
    'polioan/configurations/next',
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {},
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: path.join(__dirname, 'tsconfig.json'),
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [],
  rules: {},
  overrides: [
    {
      files: commonJsExtensions,
      extends: ['polioan/configurations/commonJS'],
    },
    {
      files: jsExtensions,
      extends: ['polioan/configurations/javascriptOnly'],
    },
    {
      files: ['.eslintrc.cjs'],
      rules: {
        'spellcheck/spell-checker': ['off'],
      },
    },
  ],
}

module.exports = config
```

## How to add configuration?

- Install the necessary dependencies
- Make sure that the dependencies are in the right place
- If necessary - configure peerDependenciesMeta
- Add configuration to src/configurations
- Update the documentation in docs/src/plugins
- If necessary - update the example in README.md
