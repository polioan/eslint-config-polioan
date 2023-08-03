import type { Rules, Config } from '../types/config'

const eslintRules: Rules = {
  'no-control-regex': ['warn'],
  'require-unicode-regexp': ['warn'],
  'no-invalid-regexp': ['warn'],
  'no-regex-spaces': ['warn'],
  'no-empty-character-class': ['warn'],
  'no-misleading-character-class': ['warn'],
  'no-useless-backreference': ['warn'],
}

const unicornRules: Rules = {
  'unicorn/better-regex': ['warn'],
}

const config: Config = {
  plugins: ['unicorn'],
  rules: {
    ...eslintRules,
    ...unicornRules,
  },
}

export = config
