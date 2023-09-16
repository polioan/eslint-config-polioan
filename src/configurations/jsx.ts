import type { Rules, Config } from '../types/config'

const validateJsxNestingRules: Rules = {
  'validate-jsx-nesting/no-invalid-jsx-nesting': ['error'],
}

const jsxa11yRules: Rules = {
  'jsx-a11y/accessible-emoji': ['error'],
  'jsx-a11y/alt-text': ['error'],
  'jsx-a11y/anchor-has-content': ['error'],
  'jsx-a11y/anchor-is-valid': ['error'],
  'jsx-a11y/aria-activedescendant-has-tabindex': ['warn'],
  'jsx-a11y/aria-props': ['error'],
  'jsx-a11y/aria-proptypes': ['error'],
  'jsx-a11y/aria-role': ['error'],
  'jsx-a11y/aria-unsupported-elements': ['error'],
  'jsx-a11y/autocomplete-valid': ['warn'],
  'jsx-a11y/click-events-have-key-events': ['warn'],
  'jsx-a11y/heading-has-content': ['error'],
  'jsx-a11y/html-has-lang': ['error'],
  'jsx-a11y/iframe-has-title': ['error'],
  'jsx-a11y/img-redundant-alt': ['warn'],
  'jsx-a11y/interactive-supports-focus': ['warn'],
  'jsx-a11y/label-has-associated-control': ['warn'],
  'jsx-a11y/lang': ['error'],
  'jsx-a11y/media-has-caption': ['error'],
  'jsx-a11y/mouse-events-have-key-events': ['warn'],
  'jsx-a11y/no-access-key': ['warn'],
  'jsx-a11y/no-aria-hidden-on-focusable': ['error'],
  'jsx-a11y/no-autofocus': ['error'],
  'jsx-a11y/no-distracting-elements': ['error'],
  'jsx-a11y/no-interactive-element-to-noninteractive-role': ['warn'],
  'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': ['warn'],
  'jsx-a11y/no-noninteractive-tabindex': ['warn'],
  'jsx-a11y/no-redundant-roles': ['warn'],
  'jsx-a11y/no-static-element-interactions': ['warn'],
  'jsx-a11y/prefer-tag-over-role': ['error'],
  'jsx-a11y/role-has-required-aria-props': ['warn'],
  'jsx-a11y/role-supports-aria-props': ['warn'],
  'jsx-a11y/scope': ['error'],
  'jsx-a11y/tabindex-no-positive': ['error'],
  'jsx-a11y/anchor-ambiguous-text': ['warn'],
  'jsx-a11y/control-has-associated-label': ['warn'],
}

const reactRules: Rules = {
  'react/self-closing-comp': ['error', { html: false }],
  'react/void-dom-elements-no-children': ['error'],
  'react/jsx-boolean-value': ['error'],
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/jsx-no-duplicate-props': ['error'],
  'react/jsx-no-script-url': ['error'],
  'react/jsx-no-target-blank': ['error'],
  'react/jsx-no-undef': ['error'],
  'react/jsx-no-useless-fragment': ['warn'],
  'react/jsx-pascal-case': ['error'],
  'react/no-children-prop': ['error'],
  'react/no-invalid-html-attribute': ['error'],
  'react/jsx-curly-brace-presence': ['error', 'never'],
}

const config: Config = {
  plugins: ['validate-jsx-nesting', 'jsx-a11y', 'react'],
  rules: {
    ...validateJsxNestingRules,
    ...jsxa11yRules,
    ...reactRules,
  },
}

export = config
