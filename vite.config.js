import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'node:url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    {
        handleHotUpdate({ file, server }) {
            if (file.endsWith('.php')) {
                server.ws.send({ type: 'full-reload', path: '*' });
            }
        }
    }
],
  build: {
    // Output to theme directory
    outDir: path.resolve(__dirname, 'assets'),
    // emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'source/js/main.js'),
        styles: path.resolve(__dirname, 'source/scss/style.scss')
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|webp|avif/i.test(extType)) {
            return 'images/[name][extname]';
          }
          if (/css/i.test(extType)) {
            return 'css/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  },
  
  // Make sure CSS changes are detected
  css: {
    devSourcemap: true
  }
});