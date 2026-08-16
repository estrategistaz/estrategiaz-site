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
    relevancia: z.string().optional(),
    atualidade: z.string().optional(),
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

    aplicabilidade: z.string().optional(),
    implementacao: z.string().optional(),
    relevancia: z.string().optional(),
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
    implementacao: z.string().optional(),
    relevancia: z.string().optional(),
    atualidade: z.string().optional(),

    facilidade: z.string().optional(),
    profundidade: z.string().optional(),
    custo: z.string().optional(),
    tempo_aplicacao: z.string().optional(),

    tags: z.array(z.string()).optional(),
  }),
});


const cases = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/cases",
  }),

  schema: z.object({
    title: z.string(),
    tipo: z.string().optional(),

    fonte: z.string().optional(),
    tipo_case: z.string().optional(),

    autores: z.array(z.string()).optional(),
    livros: z.array(z.string()).optional(),
    frameworks: z.array(z.string()).optional(),

    empresa: z.string().optional(),
    setor: z.string().optional(),
    pais: z.string().optional(),

    problema: z.array(z.string()).optional(),
    objetivo: z.array(z.string()).optional(),
    estrategia: z.array(z.string()).optional(),
    resultado: z.array(z.string()).optional(),

    tags: z.array(z.string()).optional(),
  }),

});

const sobre = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/sobre",
  }),

  schema: z.object({
    title: z.string(),
    tipo: z.string().optional(),
  }),
});

export const collections = {
  autores,
  livros,
  frameworks,
  cases,
  sobre,
};