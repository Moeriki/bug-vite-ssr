import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import viteSSR from 'vite-ssr/plugin.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteSSR(), vue(), Pages()],
});
