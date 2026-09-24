// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
	site: 'https://cdo-realtors-netlify.app',
	integrations: [mdx(), sitemap(), pagefind()],
	vite: {
    plugins: [tailwindcss()],
  },
});
