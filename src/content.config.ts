import {defineCollection} from "astro:content";
import {glob} from "astro/loaders";
import {z} from "astro/zod";
import { date } from "astro:schema";        

const blogCollection = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}"}),
    schema: z.object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        date: z.coerce.date(),
        category: z.string().optional(),
    })
});

export const collections = {
    "blog": blogCollection,
};