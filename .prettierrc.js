/** @type {import("prettier").Config & { astroAllowShorthand?: boolean }} */
const config = {
  plugins: [require.resolve('prettier-plugin-astro')],
  useTabs: false,
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  astroAllowShorthand: true,
  overrides: [
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
}

module.exports = config
