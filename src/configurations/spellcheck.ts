import type { Config } from '../types/config'

const config: Config = {
  plugins: ['spellcheck'],
  rules: {
    'spellcheck/spell-checker': [
      'warn',
      {
        comments: true,
        strings: true,
        identifiers: true,
        templates: true,
        lang: 'en_US',
      },
    ],
  },
}

export = config
