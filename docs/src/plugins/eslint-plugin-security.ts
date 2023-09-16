import { definePlugin, stripPrefix } from '../plugins'

export default definePlugin({
  packageName: 'eslint-plugin-security',
  prefix: 'security',
  docsLinkBuilder: ruleName => {
    return `https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/${stripPrefix(
      ruleName
    )}.md`
  },
  rules: [
    'security/detect-bidi-characters',
    'security/detect-buffer-noassert',
    'security/detect-child-process',
    'security/detect-disable-mustache-escape',
    'security/detect-eval-with-expression',
    'security/detect-new-buffer',
    'security/detect-no-csrf-before-method-override',
    'security/detect-non-literal-fs-filename',
    'security/detect-non-literal-regexp',
    'security/detect-non-literal-require',
    'security/detect-object-injection',
    'security/detect-possible-timing-attacks',
    'security/detect-pseudoRandomBytes',
    'security/detect-unsafe-regex',
  ],
})
