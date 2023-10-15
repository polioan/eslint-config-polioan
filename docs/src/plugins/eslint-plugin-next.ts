import { definePlugin, stripPrefix } from '../plugins'

export default definePlugin({
  packageName: '@next/eslint-plugin-next',
  prefix: '@next/next',
  docsLinkBuilder: ruleName => {
    return `https://nextjs.org/docs/messages/${stripPrefix(ruleName)}`
  },
  rules: [
    '@next/next/google-font-display',
    '@next/next/google-font-preconnect',
    '@next/next/inline-script-id',
    '@next/next/next-script-for-ga',
    '@next/next/no-assign-module-variable',
    '@next/next/no-async-client-component',
    '@next/next/no-before-interactive-script-outside-document',
    '@next/next/no-css-tags',
    '@next/next/no-document-import-in-page',
    '@next/next/no-duplicate-head',
    '@next/next/no-head-element',
    '@next/next/no-head-import-in-document',
    '@next/next/no-html-link-for-pages',
    '@next/next/no-img-element',
    '@next/next/no-page-custom-font',
    '@next/next/no-script-component-in-head',
    '@next/next/no-styled-jsx-in-document',
    '@next/next/no-sync-scripts',
    '@next/next/no-title-in-document-head',
    '@next/next/no-typos',
    '@next/next/no-unwanted-polyfillio',
  ],
})
