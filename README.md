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
/* eslint-disable spellcheck/spell-checker */

'use strict'

const path = require('node:path')

const {
  commonJsExtensions,
  esmExtensionsWhenTypeModule,
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
      files: esmExtensionsWhenTypeModule,
      extends: ['polioan/configurations/esmModules'],
    },
  ],
}

module.exports = config
```

## All possible peer dependencies

eslint @types/eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-spellcheck eslint-plugin-typescript-enum eslint-plugin-validate-jsx-nesting eslint-plugin-jsdoc eslint-plugin-security eslint-plugin-unicorn

## Configurations

### general

General rules

Requires peer dependencies - @typescript-eslint/eslint-plugin eslint-plugin-typescript-enum eslint-plugin-security eslint-plugin-unicorn

### generalTypes

General rules that requires type information

Requires peer dependencies - @typescript-eslint/eslint-plugin

### comments

Comments and JSDoc rules

Requires peer dependencies - eslint-plugin-jsdoc

### jsx

JSX rules

Requires peer dependencies - eslint-plugin-validate-jsx-nesting eslint-plugin-jsx-a11y eslint-plugin-react

### regex

Regex rules

Requires peer dependencies - eslint-plugin-unicorn

### spellcheck

Spellcheck rules

Requires peer dependencies - eslint-plugin-spellcheck

### commonJS

CommonJS rules

### esmModules

ESM modules rules

Requires peer dependencies - @typescript-eslint/eslint-plugin

## Why I need types for eslint config? 

Sometimes overrides are not working well, so I need a fallback in case I need manually resolve configuration and with types this activity will be faster.