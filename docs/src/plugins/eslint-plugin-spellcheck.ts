import { definePlugin } from '../plugins'

export default definePlugin({
  packageName: 'eslint-plugin-spellcheck',
  prefix: 'spellcheck',
  docsLinkBuilder: () => {
    return 'https://github.com/aotaduy/eslint-plugin-spellcheck#readme'
  },
  rules: ['spellcheck/spell-checker'],
})
