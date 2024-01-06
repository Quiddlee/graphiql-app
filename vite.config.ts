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
		setupFiles: './src/test/setupTests.tsx',
		css: false,
		coverage: {
			provider: 'v8',
			thresholds: {
				statements: 50,
			},
			exclude: [
				'coverage/**',
				'dist/**',
				'**/[.]**',
				'packages/*/test?(s)/**',
				'**/*.d.ts',
				'**/virtual:*',
				'**/__x00__*',
				'**/\x00*',
				'cypress/**',
				'test?(s)/**',
				'test?(-*).?(c|m)[jt]s?(x)',
				'**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
				'**/__tests__/**',
				'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,tailwind,postcss}.config.*',
				'**/vitest.{workspace,projects}.[jt]s?(on)',
				'**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
				'**/src/firebase.ts',
				'**/src/main.tsx',
			]
		},
		include: ['**/*.{test,spec}.[t]s?(x)'],
		exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*']
	},
});
