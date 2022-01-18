import App from './App.vue'; // Vue or React main app
import viteSSR from 'vite-ssr/vue';

export default viteSSR(App, { routes: [] }, (context) => {
  //
});
