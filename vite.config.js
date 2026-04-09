import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function generateMapManifest() {
  return {
    name: 'generate-map-manifest',
    buildStart() {
      const mapsDir = resolve(__dirname, 'public/maps');
      if (fs.existsSync(mapsDir)) {
        const files = fs.readdirSync(mapsDir)
          .filter(f => f.endsWith('.json') && f !== 'manifest.json');
        fs.writeFileSync(
          resolve(mapsDir, 'manifest.json'),
          JSON.stringify(files)
        );
      }
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/maps/manifest.json') {
          const mapsDir = resolve(__dirname, 'public/maps');
          const files = fs.existsSync(mapsDir)
            ? fs.readdirSync(mapsDir).filter(f => f.endsWith('.json') && f !== 'manifest.json')
            : [];
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(files));
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [generateMapManifest()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        builder: resolve(__dirname, 'builder.html'),
      },
    },
  },
});
