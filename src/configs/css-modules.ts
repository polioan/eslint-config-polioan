import { eslint, extensions } from '../helpers'
// @ts-expect-error
import cssModulesPlugin from 'eslint-plugin-css-modules'

export const cssModules: eslint.FlatConfig = [
  {
    files: extensions.toGlobs(extensions.jsts),
    languageOptions: eslint.languageOptionsTypeScript,
    plugins: {
      'css-modules': cssModulesPlugin,
    },
    rules: {
      'css-modules/no-unused-class': ['warn'],
      'css-modules/no-undef-class': ['warn'],
    },
  },
]
