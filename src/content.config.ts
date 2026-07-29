import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const autores = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/autores" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pais: z.string(),
    nascimento: z.number(),
    universidade: z.string().optional(),
    area: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  autores,
};