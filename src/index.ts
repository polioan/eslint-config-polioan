import {
  globals,
  extensions,
  eslint,
  isModules,
  isTypeScript,
  toEs,
} from './helpers'

import { comments } from './configs/comments'
import { commonJs } from './configs/common-js'
import { cssModules } from './configs/css-modules'
import { regex } from './configs/regex'
import { general } from './configs/general'
import { types } from './configs/types'
import { jsx } from './configs/jsx'

const configs = {
  comments: comments as eslint.ExportFlatConfig,
  commonJs: commonJs as eslint.ExportFlatConfig,
  cssModules: cssModules as eslint.ExportFlatConfig,
  regex: regex as eslint.ExportFlatConfig,
  general: general as eslint.ExportFlatConfig,
  types: types as eslint.ExportFlatConfig,
  jsx: jsx as eslint.ExportFlatConfig,
} as const satisfies Record<string, eslint.ExportFlatConfig>

export { configs, globals, extensions, eslint, isModules, isTypeScript, toEs }
