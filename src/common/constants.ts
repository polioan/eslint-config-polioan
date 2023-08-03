const jsExtensions = ['*.js', '*.cjs', '*.mjs', '*.jsx']

const tsExtensions = ['*.ts', '*.cts', '*.mts', '*.tsx', '*.d.ts']

const jsxExtensions = ['*.jsx', '*.tsx']

const commonJsExtensions = ['*.cjs', '*.cts']

const commonJsExtensionsWhenTypeCommonJs = [
  '*.js',
  '*.cjs',
  '*.jsx',
  '*.ts',
  '*.cts',
  '*.tsx',
  '*.d.ts',
]

const esmExtensions = ['*.mjs', '*.mts']

const esmExtensionsWhenTypeModule = [
  '*.js',
  '*.mjs',
  '*.jsx',
  '*.ts',
  '*.mts',
  '*.tsx',
  '*.d.ts',
]

export = {
  jsExtensions,
  tsExtensions,
  jsxExtensions,
  commonJsExtensions,
  commonJsExtensionsWhenTypeCommonJs,
  esmExtensions,
  esmExtensionsWhenTypeModule,
}
