import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    image: z.string().url(),
    description: z.string().optional(),
    featured: z.boolean().default(false),
    category: z.string(),
    tags: z.array(z.string())
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().url(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  products: productsCollection,
  blog: blogCollection,
};