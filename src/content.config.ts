import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Christa Brolley'),
    category: z.enum(['sms', 'editing', 'meetings']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
