import { eslint, extensions, toEs } from '../helpers'
import unicornPlugin from 'eslint-plugin-unicorn'

const eslintRules: eslint.RulesRecord = {
  'no-control-regex': ['warn'],
  'require-unicode-regexp': ['warn'],
  'no-invalid-regexp': ['warn'],
  'no-regex-spaces': ['warn'],
  'no-empty-character-class': ['warn'],
  'no-misleading-character-class': ['warn'],
  'no-useless-backreference': ['warn'],
}

const unicornRules: eslint.RulesRecord = {
  'unicorn/better-regex': ['warn'],
}

export const regex: eslint.FlatConfig = [
  {
    files: extensions.toGlobs(extensions.jsts),
    languageOptions: eslint.languageOptionsTypeScript,
    plugins: {
      unicorn: toEs(unicornPlugin),
    },
    rules: {
      ...eslintRules,
      ...unicornRules,
    },
  },
]
