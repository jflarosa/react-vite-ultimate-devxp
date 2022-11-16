import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils/index') },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src/ui/index'),
      },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features/index') },
      {
        find: '@data',
        replacement: path.resolve(__dirname, 'src/data/index'),
      },
      {
        find: '@router',
        replacement: path.resolve(__dirname, 'src/router/index'),
      },
    ],
  },
  plugins: [react()],
});
