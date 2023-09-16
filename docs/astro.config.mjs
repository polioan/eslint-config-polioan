import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  compressHTML: true,
  scopedStyleStrategy: 'class',
  build: {
    inlineStylesheets: 'always',
  },
  experimental: {},
  vite: {},
  integrations: [],
})
