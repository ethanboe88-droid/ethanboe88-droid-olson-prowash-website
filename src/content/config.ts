import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().default('/images/blog-default.svg'),
    heroAlt: z.string().default('Olson Pro Wash exterior cleaning'),
    author: z.string().default('Olson Pro Wash'),
    category: z.string().default('Exterior Cleaning'),
    tags: z.array(z.string()).default([]),
    keywords: z.string().optional(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    service: z.string(),
    serviceSlug: z.string().optional(),
    city: z.string(),
    propertyType: z.string(),
    surface: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    duration: z.string().default('One visit'),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, work };
