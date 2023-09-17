import type { Config } from '../types/config'

const config: Config = {
  plugins: ['css-modules'],
  rules: {
    'css-modules/no-unused-class': ['warn'],
    'css-modules/no-undef-class': ['warn'],
  },
}

export = config
