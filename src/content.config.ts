// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const product = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/product" }),
  schema: z.object({
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    price: z.number(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { product };