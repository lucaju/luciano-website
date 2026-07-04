import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { satteriModifiedTime } from './src/lib/satteri-modified-time';

// https://astro.build/config
export default defineConfig({
	env: {
		schema: {
			PUBLIC_GA_MEASUREMENT_ID: envField.string({ context: 'client', access: 'public' }),
		},
	},
	integrations: [
		mdx(),
		sitemap({ priority: 1, changefreq: 'daily', lastmod: new Date() }),
		react(),
		partytown({ config: { forward: ['dataLayer.push'] } }),
	],
	markdown: {
		processor: satteri({
			mdastPlugins: [satteriModifiedTime()],
			features: {
				directive: true,
				math: true,
				headingAttributes: true,
			},
		}),
		syntaxHighlight: 'shiki',
		shikiConfig: { theme: 'vitesse-dark', wrap: true },
	},
	site: 'https://lucianofrizzera.com',
	vite: {
		// Reduce dev-server noise from Vite/Vite-plugin warnings.
		// logLevel: 'error',
		plugins: [tailwindcss()],
	},
});
