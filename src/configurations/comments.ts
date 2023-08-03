import type { Rules, Config } from '../types/config'

const eslintRules: Rules = {
  'capitalized-comments': ['error'],
  'spaced-comment': [
    'error',
    'always',
    {
      block: {
        balanced: true,
      },
    },
  ],
}

const jsdocRules: Rules = {
  'jsdoc/check-access': ['error'],
  'jsdoc/check-alignment': ['error'],
  'jsdoc/check-indentation': ['error'],
  'jsdoc/check-syntax': ['error'],
  'jsdoc/check-tag-names': ['error'],
  'jsdoc/check-values': ['error'],
  'jsdoc/empty-tags': ['error'],
  'jsdoc/match-description': [
    'error',
    { matchDescription: '^\n?([A-Z`\\d_][\\s\\S]*\\.)\\s*$' },
  ],
  'jsdoc/no-bad-blocks': ['error', { preventAllMultiAsteriskBlocks: true }],
  'jsdoc/no-blank-block-descriptions': ['error'],
  'jsdoc/no-blank-blocks': ['error'],
  'jsdoc/no-multi-asterisks': ['error'],
  'jsdoc/require-asterisk-prefix': ['error'],
  'jsdoc/require-hyphen-before-param-description': ['error'],
  'jsdoc/require-param-description': ['error'],
  'jsdoc/require-param-name': ['error'],
  'jsdoc/require-throws': ['error'],
}

const config: Config = {
  plugins: ['jsdoc'],
  rules: {
    ...eslintRules,
    ...jsdocRules,
  },
}

export = config
