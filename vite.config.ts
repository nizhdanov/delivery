import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), TanStackRouterVite({ routesDirectory: 'src/apps/react-hooks/routes' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
