import { eslint, extensions } from '../helpers'
import jsdocPlugin from 'eslint-plugin-jsdoc'

const eslintRules: eslint.RulesRecord = {
  'capitalized-comments': ['error'],
}

const jsdocRules: eslint.RulesRecord = {
  'jsdoc/check-access': ['error'],
  'jsdoc/check-alignment': ['error'],
  'jsdoc/check-indentation': ['error'],
  'jsdoc/check-syntax': ['error'],
  'jsdoc/check-tag-names': ['error'],
  'jsdoc/check-values': ['error'],
  'jsdoc/empty-tags': ['error'],
  'jsdoc/match-description': [
    'error',
    {
      matchDescription: '^\n?([A-Z`\\d_][\\s\\S]*\\.)\\s*$',
    },
  ],
  'jsdoc/no-bad-blocks': [
    'error',
    {
      preventAllMultiAsteriskBlocks: true,
    },
  ],
  'jsdoc/no-blank-block-descriptions': ['error'],
  'jsdoc/no-blank-blocks': ['error'],
  'jsdoc/no-multi-asterisks': ['error'],
  'jsdoc/require-asterisk-prefix': ['error'],
  'jsdoc/require-hyphen-before-param-description': ['error'],
  'jsdoc/require-param-description': ['warn'],
  'jsdoc/require-param-name': ['error'],
  'jsdoc/require-throws': ['warn'],
}

export const comments: eslint.FlatConfig = [
  {
    files: extensions.toGlobs(extensions.jsts),
    languageOptions: eslint.languageOptionsTypeScript,
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      ...eslintRules,
      ...jsdocRules,
    },
  },
]
