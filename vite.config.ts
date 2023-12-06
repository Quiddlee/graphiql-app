/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
	resolve: {
    alias: [
			{ find: '@', replacement: resolve(__dirname, './src/') },
      { find: '@shared', replacement: resolve(__dirname, './src/shared') },
			{ find: '@components', replacement: resolve(__dirname, './src/components') },
			{ find: '@services', replacement: resolve(__dirname, './src/services') },
			{ find: '@pages', replacement: resolve(__dirname, './src/pages') },
			{ find: '@assets', replacement: resolve(__dirname, './src/assets') },
    ],
  },
	base: './',
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setupTests.ts',
		css: false,
		coverage: {
			provider: 'istanbul',
			thresholds: {
				lines: 50,
				statements: 50,
				branches: 50,
				functions: 50
			},
		}
	},
})
