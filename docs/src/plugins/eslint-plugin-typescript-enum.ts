import { definePlugin, stripPrefix } from '../plugins'

export default definePlugin({
  packageName: 'eslint-plugin-typescript-enum',
  prefix: 'typescript-enum',
  docsLinkBuilder: ruleName => {
    return `https://github.com/shian15810/eslint-plugin-typescript-enum/blob/main/docs/rules/${stripPrefix(
      ruleName
    )}.md`
  },
  rules: ['typescript-enum/no-const-enum', 'typescript-enum/no-enum'],
})
