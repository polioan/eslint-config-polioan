import assert from 'node:assert/strict'
import fsp from 'node:fs/promises'
import path from 'node:path'
import type { Rules, Config } from '../../src/types/config'

interface Plugin {
  packageName: string
  prefix: string | undefined
  docsLinkBuilder: (ruleName: string) => string
}

interface PluginWithRules extends Plugin {
  rules: Rules
}

function toRulesObj(rules: string[]) {
  const result: Rules = {}
  for (const rule of rules) {
    result[rule] = ['error']
  }
  return result
}

export function definePlugin({
  packageName,
  prefix,
  docsLinkBuilder,
  rules,
}: Plugin & { rules: string[] }): PluginWithRules {
  return { packageName, prefix, docsLinkBuilder, rules: toRulesObj(rules) }
}

export const plugins: PluginWithRules[] = Object.values(
  import.meta.glob('./plugins/*.ts', {
    eager: true,
    import: 'default',
  })
)

const keysOf = Object.keys as <T extends Record<string, unknown>>(
  object: T
) => (keyof T)[]

export function stripPrefix(ruleName: string) {
  const name = ruleName.split('/')[1]
  if (!name) {
    throw new Error(`Can't strip prefix, invalid rule name - ${ruleName}`)
  }
  return name
}

async function getAllPeerDependencies() {
  const packageJson = await import('../../package.json')

  const peerDependencies = keysOf(packageJson.peerDependencies)

  assert.strictEqual(
    peerDependencies.length,
    keysOf(packageJson.peerDependenciesMeta).length
  )

  for (const d of peerDependencies) {
    assert.deepEqual(packageJson.peerDependenciesMeta[d], {
      optional: true,
    })
  }

  return peerDependencies
}

async function getAllMyConfigurations() {
  const names = (await fsp.readdir(path.resolve('../src/configurations'))).map(
    name => path.parse(name).name
  )

  return Promise.all(
    names.map(async name => {
      const toImport = `../../../../configurations/${name}.js`
      const module = await import(toImport)
      return { config: module.default as Config, name }
    })
  )
}

async function getAllMyRules() {
  const result: Rules = {}

  for (const { config } of await getAllMyConfigurations()) {
    const names = Object.keys(config.rules)
    if (Object.keys(result).some(v => names.includes(v))) {
      throw new Error('Found duplicate')
    }

    Object.assign(result, config.rules)
  }

  return result
}

function getPrefixFromRuleName(ruleName: string) {
  const splitted = ruleName.split('/')

  const length = splitted.length

  if (length === 1) {
    return undefined
  }

  if (length === 2) {
    const prefix = splitted[0]
    if (prefix) {
      return prefix
    }
  }

  throw new Error(`Invalid rule name - ${ruleName}`)
}

async function getAllMyRulesByPlugin() {
  const result: PluginWithRules[] = []

  for (const [name, rule] of Object.entries(await getAllMyRules())) {
    const namePrefix = getPrefixFromRuleName(name)

    const plugin = plugins.find(({ prefix }) => prefix === namePrefix)
    if (!plugin) {
      throw new Error(`Can't find plugin for prefix - ${name}`)
    }

    const inResult = result.find(({ prefix }) => prefix === namePrefix)

    if (inResult) {
      Object.assign(inResult.rules, { [name]: rule })
    } else {
      const { rules: _, ...pluginProps } = plugin
      result.push({
        ...pluginProps,
        rules: { [name]: rule },
      })
    }
  }
  return result
}

export const peerDependencies = await getAllPeerDependencies()

export const myRulesByPlugin = await getAllMyRulesByPlugin()
