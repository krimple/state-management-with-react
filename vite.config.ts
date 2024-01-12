import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({ jsxImportSource: '@welldone-software/why-did-you-render' })],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5174',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
