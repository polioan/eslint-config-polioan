import type { Config } from '../types/config'

const config: Config = {
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
  },
}

export = config
