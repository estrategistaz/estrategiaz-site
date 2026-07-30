import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const autores = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/autores",
  }),

  schema: z.object({
    title: z.string(),

    tipo: z.string().optional(),

    pais: z.string().optional(),

    nascimento: z.number().optional(),

    universidade: z.array(z.string()).optional(),

    area: z.array(z.string()).optional(),

    livros: z.array(z.string()).optional(),

    frameworks: z.array(z.string()).optional(),

    conceitos: z.array(z.string()).optional(),

    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  autores,
};