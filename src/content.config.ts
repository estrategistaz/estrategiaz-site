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
    tags: z.array(z.string()).optional(),

    score: z.number().optional(),
    aplicabilidade: z.string().optional(),
    implementacao: z.string().optional(),
  }),
});


const livros = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/livros",
  }),

  schema: z.object({
    title: z.string(),
    tipo: z.string().optional(),

    autor: z.string().optional(),
    ano: z.number().optional(),
    editora: z.string().optional(),

    area: z.array(z.string()).optional(),

    score: z.number().optional(),
    relevancia: z.string().optional(),
    aplicabilidade: z.string().optional(),
    atualidade: z.string().optional(),

    tags: z.array(z.string()).optional(),
  }),
});


const frameworks = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/frameworks",
  }),

  schema: z.object({
    title: z.string(),
    tipo: z.string().optional(),

    criador: z.string().optional(),
    ano: z.number().optional(),
    categoria: z.string().optional(),

    score: z.number().optional(),

    aplicabilidade: z.string().optional(),
    facilidade: z.string().optional(),
    profundidade: z.string().optional(),
    custo: z.string().optional(),
    tempo_aplicacao: z.string().optional(),

    tags: z.array(z.string()).optional(),
  }),
});


export const collections = {
  autores,
  livros,
  frameworks,
};