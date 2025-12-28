import { defineConfig, envField } from 'astro/config'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	site: 'https://lucianofrizzera.com',
	env: {
		schema: {
			// PUBLIC_CF_TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public' }),
			PUBLIC_GA_MEASUREMENT_ID: envField.string({ context: 'client', access: 'public' }),
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: { theme: 'vitesse-dark', wrap: true },
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	},
	integrations: [
		mdx(),
		sitemap({ priority: 1, changefreq: 'daily', lastmod: new Date() }),
		react(),
		partytown({ config: { forward: ['dataLayer.push'] } }),
	],
})
