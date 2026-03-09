// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://keith-pai.github.io',
  base: '/pai-website-clone/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
