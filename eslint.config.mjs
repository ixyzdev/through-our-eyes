import { defineConfig } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    name: 'prettier/recommended',
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'warn'
    }
  },
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts']
  }
])
