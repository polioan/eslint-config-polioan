import { eslint, extensions } from '../helpers'
import tseslint from 'typescript-eslint'

export const types: eslint.FlatConfig = [
  {
    files: extensions.toGlobs(extensions.jsts),
    languageOptions: eslint.languageOptionsTypeScript,
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/prefer-nullish-coalescing': ['error'],
      '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
      '@typescript-eslint/no-misused-promises': ['warn'],
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],
      '@typescript-eslint/no-unnecessary-qualifier': ['error'],
      '@typescript-eslint/no-unsafe-argument': ['warn'],
      '@typescript-eslint/no-redundant-type-constituents': ['error'],
      '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
      '@typescript-eslint/no-unsafe-assignment': ['warn'],
      '@typescript-eslint/no-unsafe-return': ['warn'],
      '@typescript-eslint/no-unsafe-member-access': ['warn'],
      '@typescript-eslint/no-unsafe-call': ['warn'],
      '@typescript-eslint/unbound-method': ['warn'],
      '@typescript-eslint/restrict-template-expressions': [
        'warn',
        {
          allowAny: false,
          allowRegExp: false,
          allowNullish: false,
        },
      ],
      '@typescript-eslint/dot-notation': ['warn'],
      '@typescript-eslint/require-await': ['warn'],
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/no-implied-eval': ['error'],
      '@typescript-eslint/only-throw-error': ['error'],
      '@typescript-eslint/await-thenable': ['error'],
      '@typescript-eslint/no-base-to-string': ['warn'],
      '@typescript-eslint/no-confusing-void-expression': [
        'warn',
        {
          ignoreArrowShorthand: true,
          ignoreVoidOperator: true,
        },
      ],
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
          ignoreStringArrays: true,
        },
      ],
      '@typescript-eslint/restrict-plus-operands': [
        'warn',
        {
          allowAny: false,
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
          skipCompoundAssignments: false,
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': ['error'],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
      '@typescript-eslint/strict-boolean-expressions': ['warn'],
      '@typescript-eslint/no-meaningless-void-operator': ['error'],
      '@typescript-eslint/no-duplicate-type-constituents': ['error'],
      '@typescript-eslint/no-floating-promises': ['warn'],
      '@typescript-eslint/prefer-readonly': ['error'],
      '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
      '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
      '@typescript-eslint/prefer-optional-chain': ['error'],
    },
  },
]
