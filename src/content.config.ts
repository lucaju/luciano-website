import { defineCollection, reference, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blogPostSchema = z.object({
	title: z.string(),
	description: z.string(),
	keywords: z.array(z.string()),
	publishedAt: z.string(),
	status: z.enum(['published', 'draft']),
	featured: z.boolean(),
	author: reference('authors'),
});

const blogPosts = defineCollection({
	schema: blogPostSchema,
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog-posts' }),
});

const cv = defineCollection({
	schema: z.object({
		title: z.string(),
		publishedAt: z.string(),
	}),
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cv' }),
});

export type TBlogPostSchema = z.infer<typeof blogPostSchema>;
export const collections = {
	blogPosts,
	cv,
};
