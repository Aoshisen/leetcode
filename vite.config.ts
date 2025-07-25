/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
	test: {
		globals: true,
		includeSource: ['src/**/*.{js,ts}'],
	},
})