const path = require('node:path');

const express = require('express');

const DIST = `./dist`;
const PORT = 8080;

const { ssr } = require(`${DIST}/server/package.json`);
const manifest = require(`${DIST}/client/ssr-manifest.json`);
const { default: renderPage } = require(`${DIST}/server`);

const server = express();

// Serve every static asset route
for (const asset of ssr.assets || []) {
  server.use(
    '/' + asset,
    express.static(path.join(__dirname, `${DIST}/client/` + asset)),
  );
}

// Everything else is treated as a "rendering request"
server.get('*', async (request, response) => {
  const url =
    request.protocol + '://' + request.get('host') + request.originalUrl;

  const { html, status, statusText, headers } = await renderPage(url, {
    manifest,
    preload: true,
    request,
    response,
  });

  response.writeHead(status || 200, statusText || headers, headers);
  response.end(html);
});

server.listen(PORT, () => {
  console.log(`server started: http://localhost:${PORT}`);
});
