import { defineConfig } from 'tsup'
import fsp from 'node:fs/promises'

export default defineConfig({
  entry: ['src'],
  format: ['cjs'],
  tsconfig: 'tsconfig.json',
  outDir: '.',
  sourcemap: false,
  minify: false,
  replaceNodeEnv: true,
  cjsInterop: true,
  dts: true,
  bundle: false,
  target: 'esnext',
  async onSuccess() {
    await fsp.rm('./types/config.js', { force: true, maxRetries: 5 })
  },
})
