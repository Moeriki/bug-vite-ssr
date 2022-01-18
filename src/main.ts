import viteSSR from 'vite-ssr/vue';
import routes from '~pages';

import App from './App.vue'; // Vue or React main app

export default viteSSR(App, { routes }, (context) => {
  if (context.request?.url?.startsWith('/(@vite|node_modules)/')) {
    throw new Error('not allowed');
  }
});
