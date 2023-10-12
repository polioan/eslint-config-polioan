import { definePlugin } from '../plugins'

export default definePlugin({
  packageName: 'eslint-plugin-react-hooks',
  prefix: 'react-hooks',
  docsLinkBuilder: () => {
    return 'https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme'
  },
  rules: ['react-hooks/rules-of-hooks', 'react-hooks/exhaustive-deps'],
})
