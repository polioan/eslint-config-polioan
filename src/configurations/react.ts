import type { Rules, Config } from '../types/config'

const reactRules: Rules = {
  'react/destructuring-assignment': ['warn'],
  'react/display-name': ['warn'],
  'react/jsx-key': [
    'warn',
    { checkFragmentShorthand: true, warnOnDuplicates: true },
  ],
  'react/jsx-no-constructed-context-values': ['warn'],
  'react/jsx-no-leaked-render': ['warn'],
  'react/no-unstable-nested-components': ['warn'],
  'react/no-string-refs': ['error'],
  'react/no-render-return-value': ['warn'],
  'react/no-namespace': ['warn'],
  'react/no-danger-with-children': ['warn'],
  'react/no-deprecated': ['warn'],
  'react/no-find-dom-node': ['warn'],
}

const reactHooksRules: Rules = {
  'react-hooks/rules-of-hooks': ['warn'],
  'react-hooks/exhaustive-deps': ['warn'],
}

const config: Config = {
  plugins: ['react', 'react-hooks'],
  rules: {
    ...reactRules,
    ...reactHooksRules,
  },
}

export = config
