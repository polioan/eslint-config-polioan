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
  esmExtensionsWhenTypeModule,
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

## References

- https://eslint.org/docs/latest/rules
- https://typescript-eslint.io/rules
- https://www.npmjs.com/package/eslint-plugin-jsx-a11y
- https://www.npmjs.com/package/eslint-plugin-react
- https://www.npmjs.com/package/eslint-plugin-spellcheck
- https://www.npmjs.com/package/eslint-plugin-typescript-enum
- https://www.npmjs.com/package/eslint-plugin-validate-jsx-nesting
- https://www.npmjs.com/package/eslint-plugin-jsdoc
- https://www.npmjs.com/package/eslint-plugin-security
- https://www.npmjs.com/package/eslint-plugin-unicorn