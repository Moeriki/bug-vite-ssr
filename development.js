const polka = require('polka');
const { createSsrServer } = require('vite-ssr/dev');

async function createServer() {
  const app = polka();

  const viteServer = await createSsrServer({
    server: { middlewareMode: 'ssr' },
  });

  app.use(viteServer.middlewares);

  app.listen(3000);
}

createServer();
