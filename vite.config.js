import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function mapListAPI() {
  return {
    name: 'map-list-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // API endpoint to get list of maps
        if (req.url === '/api/maps') {
          const mapsDir = resolve(__dirname, 'public/maps');
          const files = fs.existsSync(mapsDir)
            ? fs.readdirSync(mapsDir).filter(f => f.endsWith('.json') && f !== 'manifest.json')
            : [];
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(files));
          return;
        }
        // Fallback for manifest.json for compatibility
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
  plugins: [mapListAPI()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        builder: resolve(__dirname, 'builder.html'),
      },
    },
  },
});
