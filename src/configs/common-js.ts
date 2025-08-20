import { eslint, extensions } from '../helpers'

export const commonJs: eslint.FlatConfig = [
  {
    files: extensions.toGlobs(extensions.commonJsJsWhenTypeCommonJs),
    languageOptions: eslint.languageOptionsTypeScript,
    rules: {
      strict: ['warn', 'global'],
    },
  },
]
