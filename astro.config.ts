import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { remarkModifiedTime } from './src/lib/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://lucianofrizzera.com',
	env: {
		schema: {
			PUBLIC_GA_MEASUREMENT_ID: envField.string({ context: 'client', access: 'public' }),
		},
	},
	vite: {
		// Reduce dev-server noise from Vite/Vite-plugin warnings.
		// logLevel: 'error',
		plugins: [tailwindcss()],
	},
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: { theme: 'vitesse-dark', wrap: true },
		remarkPlugins: [remarkModifiedTime],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	},
	integrations: [
		mdx(),
		sitemap({ priority: 1, changefreq: 'daily', lastmod: new Date() }),
		react(),
		partytown({ config: { forward: ['dataLayer.push'] } }),
	],
});
