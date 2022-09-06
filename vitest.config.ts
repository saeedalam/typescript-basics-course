
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    //includeSource: ['src/**/*.{js,ts}'],
    includeSource: ['src/01-basics/solution.test.ts'],
  },
})