import { definePlugin } from '../plugins'

export default definePlugin({
  packageName: 'eslint-plugin-validate-jsx-nesting',
  prefix: 'validate-jsx-nesting',
  docsLinkBuilder: () => {
    return 'https://github.com/MananTank/eslint-plugin-validate-jsx-nesting#readme'
  },
  rules: ['validate-jsx-nesting/no-invalid-jsx-nesting'],
})
