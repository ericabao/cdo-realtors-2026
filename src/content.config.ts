import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const listing = defineCollection({
	// Load Markdown and MDX files in the `src/content/listing/` directory.
	loader: glob({ base: './src/content/listing', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			heroImage: z.optional(image()),
			heroImageAlt: z.string(),
			title: z.string(),
			description: z.string(),
			author: z.string(),
			categories: z.array(z.string().optional()),
			tags: z.array(z.string().optional()),
			address: z.string(),
			pubDate: z.coerce.date(),
			button: z.string(),
			draft: z.boolean(),
			featured: z.boolean(),
		}),

});

const reviews = defineCollection({
  loader: glob({ base: './src/content/reviews', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
  	z.object({
		headshot: z.optional(image()),
		rating: z.string(),
		content: z.string(),
		name: z.string(),
  }),
});

export const collections = { listing, reviews};
