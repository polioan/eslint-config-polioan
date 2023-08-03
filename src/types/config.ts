type Rule = ['warn' | 'error', ...any[]]

export type Rules = Record<string, Rule>

export type Config = {
  plugins: string[]
  rules: Rules
}
