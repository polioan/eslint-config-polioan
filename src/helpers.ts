import tseslint from 'typescript-eslint'
import global from 'globals'
import fs from 'node:fs'
import path from 'node:path'

export namespace globals {
  export const node = global.node

  export const esnext = global.es2026

  export const amd = global.amd

  export const applescript = global.applescript

  export const atomtest = global.atomtest

  export const browser = global.browser

  export const builtin = global.builtin

  export const chai = global.chai

  export const commonjs = global.commonjs

  export const couch = global.couch

  export const devtools = global.devtools

  export const embertest = global.embertest

  export const es2015 = global.es2015

  export const es2016 = global.es2016

  export const es2017 = global.es2017

  export const es2018 = global.es2018

  export const es2019 = global.es2019

  export const es2020 = global.es2020

  export const es2021 = global.es2021

  export const es2022 = global.es2022

  export const es2023 = global.es2023

  export const es2024 = global.es2024

  export const es2025 = global.es2025

  export const es2026 = global.es2026

  export const es3 = global.es3

  export const es5 = global.es5

  export const greasemonkey = global.greasemonkey

  export const jasmine = global.jasmine

  export const jest = global.jest

  export const jquery = global.jquery

  export const meteor = global.meteor

  export const mocha = global.mocha

  export const mongo = global.mongo

  export const nashorn = global.nashorn

  export const nodeBuiltin = global.nodeBuiltin

  export const phantomjs = global.phantomjs

  export const prototypejs = global.prototypejs

  export const protractor = global.protractor

  export const qunit = global.qunit

  export const rhino = global.rhino

  export const serviceworker = global.serviceworker

  export const sharedNodeBrowser = global['shared-node-browser']

  export const shelljs = global.shelljs

  export const vitest = global.vitest

  export const webextensions = global.webextensions

  export const worker = global.worker

  export const wsh = global.wsh

  export const yui = global.yui
}

export namespace extensions {
  export function toName<T extends string>(
    extension: T
  ): T extends `*.${infer R}` ? R : T {
    // @ts-expect-error
    return extension.replace('*.', '')
  }

  export function toNames<T extends readonly string[]>(
    extensions: T
  ): { [K in keyof T]: T[K] extends `*.${infer R}` ? R : string } {
    // @ts-expect-error
    return extensions.map(toName)
  }

  export function toFileExtension<T extends string>(
    extension: T
  ): T extends `*.${infer R}` ? `.${R}` : T {
    // @ts-expect-error
    return extension.replace('*', '')
  }

  export function toFileExtensions<T extends readonly string[]>(
    extensions: T
  ): { [K in keyof T]: T[K] extends `*.${infer R}` ? `.${R}` : string } {
    // @ts-expect-error
    return extensions.map(toFileExtension)
  }

  export function toGlob<T extends string>(extension: T): `**/${T}` {
    return `**/${extension}`
  }

  export function toGlobs<T extends readonly string[]>(
    extensions: T
  ): { [K in keyof T]: T[K] extends string ? `**/${T[K]}` : string } {
    // @ts-expect-error
    return extensions.map(toGlob)
  }

  export const js = ['*.js', '*.cjs', '*.mjs', '*.jsx'] as const

  export const types = ['*.d.ts'] as const

  export const ts = ['*.ts', '*.cts', '*.mts', '*.tsx', ...types] as const

  export const jsts = [...js, ...ts] as const

  export const json = ['*.json', '*.jsonc', '*.json5'] as const

  export const md = ['*.md'] as const

  export const css = ['*.css'] as const

  export const all = [...jsts, ...json, ...md, ...css] as const

  export const jsxJs = ['*.jsx'] as const

  export const jsxTs = ['*.tsx'] as const

  export const jsx = [...jsxJs, ...jsxTs] as const

  export const commonJsJs = ['*.cjs'] as const

  export const commonJsTs = ['*.cts'] as const

  export const commonJs = [...commonJsJs, ...commonJsTs] as const

  export const esmJs = ['*.mjs'] as const

  export const esmTs = ['*.mts'] as const

  export const esm = [...esmJs, ...esmTs] as const

  export const commonJsJsWhenTypeCommonJs = ['*.js', '*.cjs', '*.jsx'] as const

  export const commonJsTsWhenTypeCommonJs = [
    '*.ts',
    '*.cts',
    '*.tsx',
    '*.d.ts',
  ] as const

  export const commonJsWhenTypeCommonJs = [
    ...commonJsJsWhenTypeCommonJs,
    ...commonJsTsWhenTypeCommonJs,
  ] as const

  export const esmJsWhenTypeModule = ['*.js', '*.mjs', '*.jsx'] as const

  export const esmTsWhenTypeModule = [
    '*.ts',
    '*.mts',
    '*.tsx',
    '*.d.ts',
  ] as const

  export const esmWhenTypeModule = [
    ...esmJsWhenTypeModule,
    ...esmTsWhenTypeModule,
  ] as const
}

export const isModules = (() => {
  const cwd = process.cwd()
  const pkg: unknown = JSON.parse(
    fs.readFileSync(path.join(cwd, 'package.json'), 'utf8')
  )
  if (typeof pkg !== 'object' || pkg == null) {
    throw new Error(`No package.json found in ${cwd}!`)
  }
  if (!('type' in pkg)) {
    return false
  }
  return pkg.type === 'module'
})()

export const isTypeScript = (() => {
  const cwd = process.cwd()
  return fs.existsSync(path.join(cwd, 'tsconfig.json'))
})()

export function toEs<T extends Record<PropertyKey, any>>(
  module: T
): T extends { default: infer U } ? U : T {
  if ('default' in module) {
    return module.default
  }
  // @ts-expect-error
  return module
}

export namespace eslint {
  export type Severity = 'warn' | 'error'

  export type RuleSeverityAndOptions<T extends readonly any[] = any[]> = [
    Severity,
    ...Partial<T>,
  ]

  export type RuleEntry<T extends readonly any[] = any[]> =
    RuleSeverityAndOptions<T>

  export type RulesRecord = Record<string, RuleEntry>

  export type GenericLanguageOptions = Record<string, unknown>

  export type EcmaVersion =
    | 3
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 2015
    | 2016
    | 2017
    | 2018
    | 2019
    | 2020
    | 2021
    | 2022
    | 2023
    | 2024
    | 2025
    | 2026
    | 'latest'

  export type SourceType = 'script' | 'module' | 'commonjs'

  export type GlobalConf =
    | boolean
    | 'off'
    | 'readable'
    | 'readonly'
    | 'writable'
    | 'writeable'

  export type Globals = Record<string, GlobalConf>

  export type NonESTreeParser = any

  export type ESTreeParser = any

  export type Parser = NonESTreeParser | ESTreeParser

  export interface EcmaFeatures extends Record<string, any> {
    globalReturn?: boolean | undefined
    impliedStrict?: boolean | undefined
    jsx?: boolean | undefined
  }

  export interface ParserOptions extends Record<string, any> {
    allowReserved?: boolean | undefined
    ecmaVersion?: EcmaVersion | undefined
    sourceType?: SourceType | undefined
    ecmaFeatures?: EcmaFeatures | undefined
  }

  export interface LanguageOptions extends GenericLanguageOptions {
    ecmaVersion?: EcmaVersion | undefined
    sourceType?: SourceType | undefined
    globals?: Globals | undefined
    parser?: Parser | undefined
    parserOptions?: ParserOptions | undefined
  }

  export interface LinterOptions {
    noInlineConfig?: boolean
    reportUnusedDisableDirectives?: Severity | boolean
    reportUnusedInlineConfigs?: Severity
  }

  export type Processor = any

  export type Plugin = any

  export interface Config<T extends RulesRecord = RulesRecord> {
    name?: string
    basePath?: string
    files?: readonly string[]
    ignores?: readonly string[]
    language?: string
    languageOptions?: LanguageOptions
    linterOptions?: LinterOptions
    processor?: string | Processor
    plugins?: Record<string, Plugin>
    rules?: Partial<T>
    settings?: Record<string, unknown>
  }

  export type FlatConfig = [Config, ...Config[]]

  type WriteableConfig<T> = Omit<T, 'files' | 'ignores'> & {
    files: string[]
    ignores: string[]
  }

  export type ExportFlatConfig = [
    WriteableConfig<Config>,
    ...WriteableConfig<Config>[],
  ]

  export const typeScriptTypedLintingOptions = {
    projectService: true,
    tsconfigRootDir: process.cwd(),
  } as const

  export const languageOptionsTypeScriptModules: LanguageOptions = {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: tseslint.parser,
    parserOptions: {
      ...(isTypeScript ? typeScriptTypedLintingOptions : {}),
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  }

  export const languageOptionsTypeScriptCommonJs: LanguageOptions = {
    ecmaVersion: 'latest',
    sourceType: 'commonjs',
    parser: tseslint.parser,
    parserOptions: {
      ...(isTypeScript ? typeScriptTypedLintingOptions : {}),
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      ecmaFeatures: {
        jsx: true,
      },
    },
  }

  export const languageOptionsTypeScriptScript: LanguageOptions = {
    ecmaVersion: 'latest',
    sourceType: 'script',
    parser: tseslint.parser,
    parserOptions: {
      ...(isTypeScript ? typeScriptTypedLintingOptions : {}),
      ecmaVersion: 'latest',
      sourceType: 'script',
      ecmaFeatures: {
        jsx: true,
      },
    },
  }

  export const languageOptionsTypeScript = isModules
    ? languageOptionsTypeScriptModules
    : languageOptionsTypeScriptCommonJs
}
