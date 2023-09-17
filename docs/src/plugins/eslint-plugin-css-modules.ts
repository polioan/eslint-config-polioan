import { definePlugin } from '../plugins'

export default definePlugin({
  packageName: 'eslint-plugin-css-modules',
  prefix: 'css-modules',
  docsLinkBuilder: () => {
    return 'https://github.com/atfzl/eslint-plugin-css-modules#readme'
  },
  rules: ['css-modules/no-unused-class', 'css-modules/no-undef-class'],
})
