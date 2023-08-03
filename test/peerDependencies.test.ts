import { test, expect } from 'vitest'
import fsp from 'node:fs/promises'
import path from 'node:path'

test('peerDependencies', async () => {
  const packageJson = JSON.parse(
    await fsp.readFile(path.join(__dirname, '../package.json'), 'utf8')
  )
  const peerDependencies = Object.keys(packageJson.peerDependencies)
  for (const dep of peerDependencies) {
    expect(packageJson.peerDependenciesMeta[dep]).toStrictEqual({
      optional: true,
    })
  }
})
