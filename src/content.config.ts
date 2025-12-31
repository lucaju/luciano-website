import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog/' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			description: z.string(),
			publishedAt: z.coerce.date(),
			coverImage: image().optional(),
			coverAlt: z.string().optional(),
			keywords: z.array(z.string()),
			featured: z.boolean(),
			status: z.enum(['published', 'draft']),
		}),
});

export const collections = {
	blogCollection,
};
